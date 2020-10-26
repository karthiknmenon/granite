Rails.application.routes.draw do  

  resources :tasks, only: [:index, :new, :create, :destroy, :update], defaults: {format: :json}
  
  get '*path', to: 'home#index', via: :all
end
