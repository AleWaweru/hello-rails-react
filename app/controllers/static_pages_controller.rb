class StaticPagesController < ApplicationController
  def home
    @random_greeting = Greeting.order('RANDOM()').first
  end

  def random_greeting
    random_greeting = Greeting.order('RANDOM()').first
    render json: { message: random_greeting&.message }
  end
end
