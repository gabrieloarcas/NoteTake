class HomeController < ApplicationController
  def index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(:name, :description, :start, :finish, :user_id)
  end
end
