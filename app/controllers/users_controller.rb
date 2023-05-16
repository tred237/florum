class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :user_record_invalid_response

    def create
        user = User.create!(users_params)
        render json: user, status: :created
    end

    private

    def users_params
        params.permit(:email, :username, :password, :password_confirmation)
    end

    def user_record_invalid_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
