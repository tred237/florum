import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

import CarouselPlant from "./CarouselPlant"
import { UserContext } from '../context/User';
import { PlantsContext } from '../context/Plants';

export default function CarouselPlants() {
    const { user } = useContext(UserContext);
    const { plants } = useContext(PlantsContext);
    const history = useHistory()

    const categoryType = (header, plant) => {
        if(header === 'Edible') return plant.edible
        else if(header === 'Safe For Pets') return plant.safe_for_pets
        else if(header === 'Has Flowers') return plant.blooms
    }

    const generateCarousel = (header) => {
        return (
            <Container>
                <h2>{header}</h2>
                <Carousel>
                    {plants ? plants.filter(plant => categoryType(header, plant)).map(plant => {
                            return (
                                <Carousel.Item interval={3000} key={plant.id} onClick={() => history.push(`plants/${plant.id}`)}>
                                    <CarouselPlant plant={plant} />
                                </Carousel.Item>
                            )
                        }): null
                    }
                    {/* {plants ? plants.map(plant => {
                        if(categoryType(header, plant)) return (
                            <Carousel.Item interval={3000} key={plant.id} onClick={() => history.push(`plants/${plant.id}`)}>
                                <CarouselPlant plant={plant} />
                            </Carousel.Item>
                        ) 
                    }) : null} */}
                </Carousel>
            </Container>
        )
    }

    return (
        <Container>
            <h1>{`Welcome ${user.username}!`}</h1>
            {generateCarousel('Edible')}
            {generateCarousel('Safe For Pets')}
            {generateCarousel('Has Flowers')}
        </Container>       
    )
}
