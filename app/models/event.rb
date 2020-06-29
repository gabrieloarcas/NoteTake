class Event < ApplicationRecord
  belongs_to :user
  has_many :notes, dependent: :destroy

##custom attributes in the Model (start, finish)
  def start_time
    self.start
  end

  def end_time
    self.finish
  end

  def self.search(start: nil)
		start_ids = Event.where('start LIKE ?', '%' + start + '%').ids
		puts start_ids

		Event.where('start_id IN (?)', start_ids)
	end


end
