class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_error_message

    def create
        user = User.create!(users_params)
        render json: user, status: :created
    end

    private

    def users_params
        params.permit(:email, :username, :password, :password_confirmation)
    end
end
