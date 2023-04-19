class PlantsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:update]

    rescue_from ActiveRecord::RecordInvalid, with: :plant_record_invalid_response
    rescue_from ActiveRecord::RecordNotFound, with: :plant_record_not_found_repsonse

    def index
        plants = Plant.all.order(:name)
        render json: plants, status: :ok
    end

    def create
        plant = Plant.create!(plant_params)
        render json: plant, status: :created
    end

    def show
        plant = find_plant
        render json: plant, status: :ok
    end

    def update
        plant = find_plant
        plant.update!(plant_update_params)
        render json: plant, status: :ok
    end

    private

    def find_plant
        Plant.find(params[:id])
    end

    def plant_params
        params.permit(:name, :image, :light, :water, :size, :description, :safe_for_pets, :owner_id)
    end

    def plant_update_params
        params.permit(:name, :image, :light, :water, :size, :description, :safe_for_pets)
    end

    def plant_record_invalid_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def plant_record_not_found_repsonse(invalid)
        render json: {error: "Plant not found"}, status: :not_found
    end
end
