Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # route to test configuration
  get '/hello', to: 'application#hello_world'
  resources :plants, only: [:index, :create, :show, :update]
  resources :forum_entries, only: [:create]
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  get '/current-user', to: 'sessions#show'
  delete '/logout', to: 'sessions#destroy'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
