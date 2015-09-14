json.array!(@messages) do |message|
  json.extract! message, :id, :body, :uuid, :to
  json.url message_url(message, format: :json)
end
