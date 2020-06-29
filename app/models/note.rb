class Note < ApplicationRecord
  belongs_to :event
  has_rich_text :note
end
