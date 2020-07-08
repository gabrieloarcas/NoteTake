Rails.application.routes.draw do
  resources :events do
    resources :notes
  end

  namespace :api do 
    namespace :v1 do 
     resources :events, only: [:index, :create, :destroy, :update]
    end 
  end 

  devise_for :users
  root 'home2#index2'
  get 'events', to: 'events#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
