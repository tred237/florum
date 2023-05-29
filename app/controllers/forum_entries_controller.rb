class ForumEntriesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_error_message
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_error_response

    def create
        entry = ForumEntry.create!(entry_params)
        render json: entry, status: :created
    end

    def update
        entry = ForumEntry.find(params[:id])
        if (entry.user_id == session[:user_id])
            params[:edited] = true
            entry.update!(entry_update_params)
            render json: entry, status: :ok
        else 
            render json: {error: "You are not authorized to edit this forum entry"}, status: :unauthorized
        end
    end

    private

    def entry_params
        params.permit(:user_id, :plant_id, :entry)
    end

    def entry_update_params
        params.permit(:entry, :edited)
    end
end
