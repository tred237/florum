class PlantsController < ApplicationController
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
        if (plant.owner_id == session[:user_id])
            plant.update!(plant_update_params)
            render json: plant, status: :ok
        else 
            render json: {error: "You are not authorized to edit this plant's information"}, status: :unauthorized
        end
    end 

    def destroy
        plant = find_plant
        plant.forum_entries.destroy_all
        plant.destroy
        head :no_content
    end

    private

    def find_plant
        Plant.find(params[:id])
    end

    def plant_params
        params.permit(:name, :image, :light, :water, :size, :description, :safe_for_pets, :edible, :blooms, :climate, :owner_id)
    end

    def plant_update_params
        params.permit(:name, :image, :light, :water, :size, :description, :safe_for_pets, :edible, :blooms, :climate)
    end

    def plant_record_invalid_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def plant_record_not_found_repsonse(invalid)
        render json: {error: "Plant not found"}, status: :not_found
    end
end
