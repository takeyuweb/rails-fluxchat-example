class ChatChannel < ApplicationCable::Channel
  def subscribed
    stop_all_streams
    stream_from 'chat_activity'
    stream_from "chat_activity:#{connection.uuid}"
  end

  def unsubscribed
    stop_all_streams
  end

  def message(data)
    message = nil

    ActiveRecord::Base.connection_pool.with_connection do |conn|
      message = Message.create(
          to: data['to'].presence,
          body: data['body'],
          uuid: connection.uuid
      )
    end

    if message.to.present?
      # 宛先が指定されている場合はそこと自分に送る
      ActionCable.server.broadcast "chat_activity:#{message.uuid}", message.to_json
      ActionCable.server.broadcast "chat_activity:#{message.to}", message.to_json
    else
      # そうでなければ全体へ
      ActionCable.server.broadcast 'chat_activity', message.to_json
    end
  end
end
