class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :set_uuid

  private
  def set_uuid
    unless cookies.signed[:uuid]
      cookies.signed[:uuid] = SecureRandom.uuid
    end
    true
  end

  def uuid
    @uuid ||=  cookies.signed[:uuid]
  end
end
