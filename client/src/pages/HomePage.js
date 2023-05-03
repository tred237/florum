import { useContext, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';

import { UserContext } from '../context/User';
import { PlantsContext } from '../context/Plants';
import ClimateCard from '../components/ClimateCard';
import PlantCard from "../components/PlantCard"
import CategoryCarousel from '../components/CategoryCarousel';

export default function HomePage({ searchedPlants }) {
    const { user } = useContext(UserContext);
    const { plants } = useContext(PlantsContext);

    const [ediblePlants, setEdiblePlants] = useState([])
    const [safeForPetsPlants, setSafeForPetsPlantsPlants] = useState([])
    const [flowerPlants, setFlowerPlants] = useState([])

    const categoryType = (header, plant) => {
        if(header === 'Edible') return plant.edible
        else if(header === 'Safe For Pets') return plant.safe_for_pets
        else if(header === 'Has Flowers') return plant.blooms
    }

    useEffect(() => {
        if(plants) {
            setEdiblePlants(plants.filter(plant => categoryType('Edible', plant)))
            setSafeForPetsPlantsPlants(plants.filter(plant => categoryType('Safe For Pets', plant)))
            setFlowerPlants(plants.filter(plant => categoryType('Has Flowers', plant)))
        }
    },[plants])

    return(
        <Container>
            <h1>{`Welcome ${user.username}!`}</h1>
            <h3>Climate Types</h3>
            <Stack direction="horizontal" className="h-100 align-items-center" gap={3}>
                {['Aquatic','Continental','Dry','Polar','Temperate','Tropical'].map(climate => <ClimateCard key={climate} climateType={climate} />)}
            </Stack>
            <h3>Edible</h3>
            <CategoryCarousel plants={ediblePlants} />
            <h3>Safe For Pets</h3>
            <CategoryCarousel plants={safeForPetsPlants} />
            <h3>Blooms</h3>
            <CategoryCarousel plants={flowerPlants} />
            <ListGroup> 
                {plants ? plants.filter(plant => !searchedPlants || plant.name.toLowerCase().startsWith(searchedPlants.toLowerCase())).map((plant) => <PlantCard key={plant.id} plant={plant} />) : null}
            </ListGroup>
        </Container>
    )
}
