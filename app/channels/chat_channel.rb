class ChatChannel < ApplicationCable::Channel
  def subscribed
    stop_all_streams
    stream_from 'chat_activity'
  end

  def unsubscribed
    stop_all_streams
  end

  def message(data)
    message = nil

    ActiveRecord::Base.connection_pool.with_connection do |conn|
      message = Message.create(body: data['body'])
    end

    ActionCable.server.broadcast 'chat_activity', message.to_json
  end
end
