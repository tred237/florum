class ForumEntriesController < ApplicationController
    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :entry_record_invalid_response
    rescue_from ActiveRecord::RecordNotFound, with: :entry_record_not_found_repsonse

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

    def entry_record_invalid_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def entry_record_not_found_repsonse(invalid)
        render json: {error: "Forum entry not found"}, status: :not_found
    end
end
