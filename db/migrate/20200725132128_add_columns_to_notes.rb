class AddColumnsToNotes < ActiveRecord::Migration[6.0]
  def change
    add_column :notes, :category_id, :string
  end
end
