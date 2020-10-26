Rails.application.routes.draw do  

  resources :tasks, only: [:index, :new, :create, :destroy, :update], defaults: {format: :json}
  get '/tasks/archive/:id', to: 'tasks#archive'

  resources :users, only: [ :new, :create], defaults: {format: :json}

  resources :sessions, only: [ :new, :create], defaults: {format: :json}
  delete '/logout' => 'sessions#destroy'

  root "home#index"

  get '*path', to: 'home#index', via: :all
  
end
