Rails.application.routes.draw do
  resources :forum_entries, only: [:create, :update]
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  get '/current-user', to: 'sessions#show'
  delete '/logout', to: 'sessions#destroy'
  resources :plants

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
