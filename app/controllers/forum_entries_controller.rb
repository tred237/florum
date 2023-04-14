class ForumEntriesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :entry_record_invalid_response

    def create
        # byebug
        entry = ForumEntry.create!(entry_params)
        render json: entry, status: :created
    end

    private

    def entry_params
        params.permit(:user_id, :plant_id, :entry)
    end

    def entry_record_invalid_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
