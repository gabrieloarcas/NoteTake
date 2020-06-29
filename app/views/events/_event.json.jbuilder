json.extract! event, :id, :name, :description, :start, :finish, :user_id, :created_at, :updated_at
json.url event_url(event, format: :json)
