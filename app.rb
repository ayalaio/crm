require 'sinatra'
require 'sinatra/activerecord'
require_relative 'lib/user'
require_relative 'lib/order'

class App < Sinatra::Base
  before do
    request.body.rewind
    to_parse = request.body.read
    to_parse = to_parse.empty? ? nil : to_parse
    @request_payload = JSON.parse(to_parse || '{}')
    content_type :json
  end

  get '/' do
    p 'Hello!'
  end

  get '/users/?' do
    @users = User.all
    @users.to_json
  end

  get '/users/:id/?' do
    @user = User.find_by_id(params[:id])
    @user.to_json
  end

  post '/orders' do
    puts "Payload: #{@request_payload}"
    params = @request_payload.select { |k| Order.allowed_params.include?(k) }
    puts "save: #{params}"
    Order.create(params)
  end

  get '/orders' do 
    Order.all.to_json
  end

end

