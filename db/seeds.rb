# require_relative './assets/images/lipstickplant'
User.create!(email: 'trevor@email.com', username: "trevor", password: 'T3ster!', password_confirmation: 'T3ster!')

Plant.create!(
    name: "Lipstick Plant",
    image: './db/assets/lipstickplant.jpg',
    climate: 'Tropical', 
    light: "Bright, indirect light",
    water: "Enough to keep soil moist",
    size: "3 ft",
    description: "Beautiful on your desk or window",
    edible: false,
    safe_for_pets: true,
    blooms: true,
    owner_id: 1
)

Plant.create!(
    name: "Golden Pothos",
    image: './db/assets/goldenpothos.jpg',
    climate: 'Temperate', 
    light: "Indirect, medium to low",
    water: "Every 1-2 weeks allowing soil to dry between",
    size: "20-40 ft",
    description: "It's long and beautiful",
    edible: false,
    safe_for_pets: true,
    blooms: false,
    owner_id: 1
)

Plant.create!(
    name: "Olive Tree",
    image: './db/assets/olivetree.jpg',
    climate: 'Temperate', 
    light: "Bright, direct sunlight",
    water: "Water soil thoroughly",
    size: "10 ft",
    description: "Elegant with delicious olives",
    edible: true,
    safe_for_pets: true,
    blooms: true,
    owner_id: 1
)

Plant.create!(
    name: "String of Raindrops",
    image: './db/assets/stringofraindrops.jpg',
    climate: 'Temperate', 
    light: "Bright, direct sunlight",
    water: "Water soil thoroughly",
    size: "10 ft",
    description: "Elegant with delicious olives",
    edible: false,
    safe_for_pets: true,
    blooms: false,
    owner_id: 1
)

Plant.create!(
    name: "Mint",
    image: './db/assets/mint.jpg',
    climate: 'Temperate', 
    light: "Bright, direct sunlight",
    water: "Every few days to prevent soil from drying",
    size: "6 ft",
    description: "Fragrant and great for drinks",
    edible: true,
    safe_for_pets: true,
    blooms: false,
    owner_id: 1
)

Plant.create!(
    name: "Rosemary",
    image: './db/assets/rosemary.jpg',
    climate: 'Temperate', 
    light: "Bright, direct sunlight",
    water: "Every few days",
    size: "4 ft",
    description: "Fragrant and great for drinks",
    edible: true,
    safe_for_pets: false,
    blooms: false,
    owner_id: 1
)

Plant.create!(
    name: "Aspargus Fern",
    image: './db/assets/asparagusfern.jpg',
    climate: 'Tropical', 
    light: "Direct or bright indirect light",
    water: "Daily misting",
    size: "3 ft",
    description: "Great for tropical terariums",
    edible: false,
    safe_for_pets: false,
    blooms: false,
    owner_id: 1
)

Plant.create!(
    name: "Golden Barrel Cluster",
    image: './db/assets/goldenbarrelcluster.jpg',
    climate: 'Dry', 
    light: "Direct sun to part shade",
    water: "Water when soil is completely dried out",
    size: "2-4 ft",
    description: "Prickly",
    edible: false,
    safe_for_pets: false,
    blooms: true,
    owner_id: 1
)

Plant.create!(
    name: "String of Hearts",
    image: './db/assets/stringofhearts.jpg',
    climate: 'Tropical', 
    light: "Bright, indirect light",
    water: "Regularly in spring nad summer allowing soil to dry out between waterings",
    size: "12 ft",
    description: "Long and needy",
    edible: false,
    safe_for_pets: true,
    blooms: true,
    owner_id: 1
)

Plant.create!(
    name: "Carrot",
    image: './db/assets/carrot.jpg',
    climate: 'Temperate', 
    light: "Bright light",
    water: "Soak the soil thoroughly and deeply, then let the soil dry slightly before watering again",
    size: "1 ft",
    description: "Yummy and good for roasting",
    edible: true,
    safe_for_pets: true,
    blooms: true,
    owner_id: 1
)

Plant.create!(
    name: "Avacado",
    image: './db/assets/avacado.jpg',
    climate: 'Tropical', 
    light: "Bright light",
    water: "Medium",
    size: "5 to 8 ft",
    description: "Creamy and good for you. Keep away from dogs",
    edible: true,
    safe_for_pets: false,
    blooms: true,
    owner_id: 1
)

Plant.create!(
    name: "Bell Pepper",
    image: './db/assets/bellpepper.jpg',
    climate: 'Tropical', 
    light: "Bright light",
    water: "Well watered, never soggy",
    size: "Half to 1 ft",
    description: "Healthy, sweet, and great for yummy dishes",
    edible: true,
    safe_for_pets: true,
    blooms: true,
    owner_id: 1
)

Plant.create!(
    name: "Roma Tomato",
    image: './db/assets/romatomato.jpg',
    climate: 'Temperate', 
    light: "Bright light",
    water: "Well watered, never soggy",
    size: "2 to 4 ft",
    description: "Healthy, sweet, and great for yummy dishes",
    edible: true,
    safe_for_pets: false,
    blooms: true,
    owner_id: 1
)

Plant.create!(
    name: "Pickle Plant",
    image: './db/assets/pickleplant.jpg',
    climate: 'Temperate', 
    light: "Full or partial sun",
    water: "Water when dry",
    size: "1.5 ft",
    description: "Great for desks and windows",
    edible: false,
    safe_for_pets: true,
    blooms: true,
    owner_id: 1
)