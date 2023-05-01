import { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

import CarouselPlant from "./CarouselPlant"
import { UserContext } from '../context/User';
import { PlantsContext } from '../context/Plants';
import florumlogo from "../img/florumlogo.png";

export default function CarouselPlants() {
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

    const generateCarousel = (header, arr) => {
        return (
            <Container>
                <Stack direction="horizontal" className="h-100 align-items-center" gap={3}>
                <h2>{header}</h2>
                <Link>See all</Link>
                </Stack>
                <Stack direction="horizontal" className="h-100 justify-content-center align-items-center" gap={3}>
                    {arr ? arr.filter((plant, index) => index < 4).map(plant => {
                            return (
                                <CarouselPlant key={plant.id} plant={plant} />
                            )
                        }): null
                    }
                    <Card onClick={null}>
                        <img src={florumlogo} alt={florumlogo}  />
                        <Card.Title>
                            <h3>See All</h3>
                        </Card.Title>
                    </Card>
                </Stack>
            </Container>
        )
    }

    return (
        <Container>
            <h1>{`Welcome ${user.username}!`}</h1>
            {generateCarousel('Edible', ediblePlants)}
            {generateCarousel('Safe For Pets', safeForPetsPlants)}
            {generateCarousel('Has Flowers', flowerPlants)}
        </Container>       
    )
}
