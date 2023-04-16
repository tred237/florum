class SessionsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:create]

    rescue_from ActiveRecord::RecordNotFound, with: :user_unauthorized_response

    def create
        user = User.find_by("username = ? or email = ?", params[:email_or_username], params[:email_or_username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, serializer: UserSerializer, status: :created
        else
            render json: {error: "Invalid login credentials"}, status: :unauthorized
        end
    end

    def show
        user = User.find(session[:user_id])
        render json: user, serializer: UserSerializer, status: :ok
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    private

    def user_unauthorized_response(invalid)
        render json: {error: "Not Authorized"}, status: :unauthorized
    end
end
