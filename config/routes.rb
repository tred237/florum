Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # route to test configuration
  get '/hello', to: 'application#hello_world'
  resources :plants, only: [:index]
  post '/signup', to: 'users#create'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
