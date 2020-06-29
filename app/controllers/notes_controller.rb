class NotesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_event

  def new
    @note = Note.new
  end

  def create
    @event = Event.find(params[:event_id])
    @note = @event.notes.create(params[:note].permit(:note, :event_id))
    @note.user_id = current_user.id

    respond_to do |format|
      if @note.save
        format.html { redirect_to event_path(@event) }
      else
        format.html {redirect_to event_path(@event), notice: "Try again"}
      end
    end
  end

  def destroy
    @note = @event.notes.find(params[:id])
    @note.destroy
    redirect_to event_path(@event)
  end

  private

  def set_event
    @event = Event.find(params[:event_id])
  end

  def set_note
    @note = Note.find(params[:id])
  end

end
