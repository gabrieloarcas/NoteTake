class Api::V1::EventsController < ApplicationController

  # def index
  #   render json: Event.all
  # end

  def index 
    if user_signed_in?
      render json: current_user.events
    else
      render json: {}, status: 401
    end 
  end


  def create 
    if user_signed_in? 
      if event = current_user.events.create(event_params)
        render json: event, status: :created 
      else 
        render json: event.errors, status: 400
      end
    else 
      render json: {}, status: 401
    end
  end

  # def create
  #   event = Event.create(event_params)
  #   render json: event
  # end

  def update
    event = Event.find(params[:id])
    event.update(event_params)
    render json: event
  end

  def destroy
    Event.destroy(params[:id])
  end

  private

  def event_params
    params.require(:event).permit(:id, :name, :description, :start, :finish, :user_id)
  end

end