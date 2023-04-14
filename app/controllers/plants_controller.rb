class PlantsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :plant_record_invalid_response

    def index
        plants = Plant.all
        render json: plants
    end

    def create
        # byebug
        plant = Plant.create!(plant_params)
        render json: plant, status: :created
    end

    private

    def plant_params
        params.permit(:name, :image, :light, :water, :size, :description, :safe_for_pets, :owner_id)
    end

    def plant_record_invalid_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
