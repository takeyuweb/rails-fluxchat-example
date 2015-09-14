class PagesController < ApplicationController
  def index
    unless cookies.signed[:uuid]
      cookies.signed[:uuid] = SecureRandom.uuid
    end
  end
end
