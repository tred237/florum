class PlantsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_error_message
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_error_response

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
end
