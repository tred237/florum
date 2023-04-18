class PlantsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:show]

    rescue_from ActiveRecord::RecordInvalid, with: :plant_record_invalid_response
    rescue_from ActiveRecord::RecordNotFound, with: :plant_record_not_found_repsonse

    def index
        plants = Plant.all
        render json: plants
    end

    def create
        plant = Plant.create!(plant_params)
        render json: plant, status: :created
    end

    def show
        plant = Plant.find(params[:id])
        render json: plant, status: :ok
    end

    private

    def plant_params
        params.permit(:name, :image, :light, :water, :size, :description, :safe_for_pets, :owner_id)
    end

    def plant_record_invalid_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def plant_record_not_found_repsonse(invalid)
        render json: {error: "Plant not found"}, status: :not_found
    end
end
