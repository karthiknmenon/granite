Rails.application.routes.draw do  

  resources :tasks, only: [:index, :create, :destroy], defaults: {format: :json}
  
  get '*path', to: 'home#index', via: :all
end
