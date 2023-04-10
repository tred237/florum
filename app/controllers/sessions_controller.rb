class SessionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :user_unauthorized_response

    def create
        user = User.find_by(username: :username)
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        end
    end

    def show
        user = User.find(id: session[:user_id])
        if user
            render json: user
        end
    end

    private

    def user_unauthorized_response(invalid)
        render json: {error: "Not Authorized"}, status: :unauthorized
    end
end
