class Note < ApplicationRecord
  belongs_to :event
  belongs_to :category
  belongs_to :user
  has_rich_text :note
end
