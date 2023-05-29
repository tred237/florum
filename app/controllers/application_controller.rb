class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize

    def authorize
        render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end

    private

    def record_not_found_error_response(invalid)
        render json: {"error": "#{invalid.message.split(" ")[2]} not found"}
    end

    def unprocessable_entity_error_message(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
