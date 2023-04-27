require 'bcrypt'
User.create!(email: 'trevor@email.com', username: "trevor", password: 'T3ster!', password_confirmation: 'T3ster!')

Plant.create!(
    name: "Rose",
    image: "image.jpg",
    climate: "Temperate",
    light: "lots",
    water: "1 cup a day",
    size: "3 feet",
    description: "Nice smell, red",
    safe_for_pets: true,
    edible: true,
    blooms: true, 
    owner_id: 1
)

Plant.create!(
    name: "Rosemary",
    image: "image.jpg",
    climate: "Temperate",
    light: "lots",
    water: "1 cup a day",
    size: "3 feet",
    description: "Nice smell, red",
    safe_for_pets: true,
    edible: true,
    blooms: true,
    owner_id: 1
)

Plant.create!(
    name: "Thyme",
    image: "image.jpg",
    climate: "Temperate",
    light: "lots",
    water: "1 cup a day",
    size: "3 feet",
    description: "Nice smell, red",
    safe_for_pets: true,
    edible: true,
    blooms: true,
    owner_id: 1
)

Plant.create!(
    name: "Sage",
    image: "image.jpg",
    climate: "Temperate",
    light: "lots",
    water: "1 cup a day",
    size: "3 feet",
    description: "Nice smell, red",
    safe_for_pets: true,
    edible: true,
    blooms: true,
    owner_id: 1
)

Plant.create!(
    name: "Tomato",
    image: "image.jpg",
    climate: "Temperate",
    light: "lots",
    water: "1 cup a day",
    size: "3 feet",
    description: "Nice smell, red",
    safe_for_pets: true,
    edible: true,
    blooms: true,
    owner_id: 1
)
# ForumEntry.create!(user_id: 1, plant_id: 1, entry: "Love this plant!")
# ForumEntry.create!(user_id: 2, plant_id: 1, entry: "Meh")