class MessageRelayJob < ApplicationJob
  def perform(message)
    ActionCable.server.broadcast 'chat_activity', message.to_json
  end
end
