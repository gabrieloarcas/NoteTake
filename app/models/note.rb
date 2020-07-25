class Note < ApplicationRecord
  belongs_to :event
  belongs_to :category
  has_rich_text :note
end
