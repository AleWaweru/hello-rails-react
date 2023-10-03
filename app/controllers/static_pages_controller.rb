class StaticPagesController < ApplicationController
  def home
    @random_greeting = Greeting.order("RANDOM()").first
  end
end
