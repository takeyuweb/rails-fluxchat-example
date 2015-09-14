class MessagesController < ApplicationController
  before_action :set_message, only: [:show, :edit, :update, :destroy]

  # GET /messages.json
  def index
    t = Message.arel_table
    everyone = t[:to].eq(nil)
    direct_message = t[:to].eq(uuid)
    own = t[:uuid].eq(uuid)
    @messages = Message
                    .where(everyone.or(direct_message).or(own))
                    .order(created_at: :desc).limit(100).all
  end

  # GET /messages/1
  # GET /messages/1.json
  def show
  end

  # POST /messages.json
  def create
    @message = Message.new(message_params)
    @message.uuid = uuid

    respond_to do |format|
      if @message.save
        MessageRelayJob.perform_later(@message) # ActionCableでクライアントに通知
        format.json { render :show, status: :created, location: @message }
      else
        format.json { render json: @message.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /messages/1.json
  def update
    respond_to do |format|
      if @message.update(message_params)
        MessageRelayJob.perform_later(@message)
        format.json { render :show, status: :ok, location: @message }
      else
        format.json { render json: @message.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /messages/1.json
  def destroy
    @message.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def message_params
      params.require(:message).permit(:body, :to)
    end
end
