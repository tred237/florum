class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :user_record_invalid_response

    def create
        user = User.create!(users_pararms)
        session[:user_id] = user.id
        render json: user
    end

    private

    def users_pararms
        params.permit(:username, :password, :password_confirmation)
    end

    def user_record_invalid_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
