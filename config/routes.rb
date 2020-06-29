Rails.application.routes.draw do
  resources :events do
    resources :notes
  end

  devise_for :users
  root 'home#index'
  get 'events', to: 'events#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
