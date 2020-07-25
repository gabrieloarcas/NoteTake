class NotesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_event
  before_action :set_note, only: [:show, :edit, :update, :destroy]

  def new
    @note =  @event.notes.build
    @categories = Category.all.map{|c| [ c.name, c.id ] }
  end

  def create
    @event = Event.find(params[:event_id])
    @note = @event.notes.create(params[:note].permit(:note, :event_id, :category_id))
    @note.user_id = current_user.id
    @note.category_id = params[:category_id]

    respond_to do |format|
      if @note.save
        format.html {redirect_to event_path(@event)}
        format.js
      else
        format.html {redirect_to event_path(@event)}
        format.js
      end
    end
  end

  def update
    respond_to do |format|
      if @note.update(note_params)
        format.html { redirect_to event_path(@event), notice: 'Note was successfully updated.' }
        format.json { render :event, status: :ok, location: @note }
      else
        format.html { render :edit }
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
    end
  end


  def show
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
    @note = @event.notes.find(params[:id])
  end

  def note_params
    params.require(:note).permit(:note, :event_id, :category_id, :user_id)
  end

end
