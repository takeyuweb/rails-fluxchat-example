class MessageRelayJob < ApplicationJob
  def perform(message)
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
