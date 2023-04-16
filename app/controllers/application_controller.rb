class ApplicationController < ActionController::API
    include ActionController::Cookies

    def authorize
        render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
