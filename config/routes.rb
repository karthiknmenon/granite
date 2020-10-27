Rails.application.routes.draw do  

  resources :tasks, only: [:show, :index, :new, :create, :destroy, :update], defaults: {format: :json}
  get '/tasks/archive/:id', to: 'tasks#archive'

  resources :tasks do
    resources :status, only: [:update], defaults: {format: :json}
    resources :comments, only: [:create], defaults: {format: :json}
  end

  resources :users, only: [ :new, :create], defaults: {format: :json}

  resources :sessions, only: [ :new, :create], defaults: {format: :json}
  delete '/logout' => 'sessions#destroy'

  root "home#index"

  get '*path', to: 'home#index', via: :all
  
end
