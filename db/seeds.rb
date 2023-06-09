User.create!(email: 'trevor@email.com', username: "Trevor", password: 'T3ster!', password_confirmation: 'T3ster!')
User.create!(email: 'jane@email.com', username: "Jane", password: 'T3ster!', password_confirmation: 'T3ster!')
User.create!(email: 'mike@email.com', username: "Mike", password: 'T3ster!', password_confirmation: 'T3ster!')
User.create!(email: 'lauren@email.com', username: "Lauren", password: 'T3ster!', password_confirmation: 'T3ster!')

Plant.create!(
    name: "Lipstick Plant",
    image: 'lipstickplant.jpg',
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
    image: 'goldenpothos.jpg',
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
    image: 'olivetree.jpg',
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
    image: 'stringofraindrops.jpg',
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
    image: 'mint.jpg',
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
    image: 'rosemary.jpg',
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
    image: 'asparagusfern.jpg',
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
    image: 'goldenbarrelcluster.jpg',
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
    image: 'stringofhearts.jpg',
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
    image: 'carrot.jpg',
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
    image: 'avacado.jpg',
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
    image: 'bellpepper.jpg',
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
    image: 'romatomato.jpg',
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
    image: 'pickleplant.jpg',
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

(1..100).each do |i|
    ForumEntry.create!(user_id: rand(1..4), plant_id: rand(1..13), entry: Faker::Lorem.sentence(word_count: rand(3..25), random_words_to_add: 0))
end