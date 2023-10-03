Rails.application.routes.draw do
  root 'static_pages#home' # Assumes there's a 'home' action in your 'StaticPagesController'
  
  # Other routes...
  
  get '/random_greeting', to: 'greetings#random_greeting'
end
