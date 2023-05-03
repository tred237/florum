import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

import { UserContext } from '../context/User';
import { PlantsContext } from '../context/Plants';
import ClimateCard from '../components/ClimateCard';
import CategoryCarousel from '../components/CategoryCarousel';
import Button from 'react-bootstrap/Button';

export default function HomePage({ searchedPlants }) {
    const { user } = useContext(UserContext);
    const { plants } = useContext(PlantsContext);
    const [ediblePlants, setEdiblePlants] = useState([])
    const [safeForPetsPlants, setSafeForPetsPlantsPlants] = useState([])
    const [flowerPlants, setFlowerPlants] = useState([])
    const history = useHistory()

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
            <hr className="hr" />
            <h3>Edible</h3>
            <CategoryCarousel plants={ediblePlants} />
            <hr className="hr" />
            <h3>Safe For Pets</h3>
            <CategoryCarousel plants={safeForPetsPlants} />
            <hr className="hr" />
            <h3>Blooms</h3>
            <CategoryCarousel plants={flowerPlants} />
            <hr className="hr" />
            <Button onClick={() => history.push('/all-plants')}>See All Plants</Button>
        </Container>
    )
}
