module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :uuid

    def connect
      self.uuid = find_uuid
      logger.add_tags 'ActionCable', uuid
    end

    protected
    def find_uuid
      if uuid = cookies.signed[:uuid]
        uuid
      else
        reject_unauthorized_connection
      end
    end
  end
end