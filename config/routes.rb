Rails.application.routes.draw do
  root 'static_pages#home'

  get '/', to: 'static_pages#home'
  get '/api/random_greeting', to: 'static_pages#random_greeting'

  namespace :api do
    resources :greetings, only: [:home]
  end
end
