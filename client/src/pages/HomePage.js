import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';

import SearchedPlants from "../components/SearchedPlants";
import { UserContext } from '../context/User';
import { PlantsContext } from '../context/Plants';
import CarouselPlants from '../components/CarouselPlants';

export default function HomePage({ searchedPlants }) {
    const { user } = useContext(UserContext);
    const { plants } = useContext(PlantsContext);
    const history = useHistory()

    // const categoryType = (header, plant) => {
    //     if(header === 'Edible') return plant.edible
    //     else if(header === 'Safe For Pets') return plant.safe_for_pets
    //     else if(header === 'Has Flowers') return plant.blooms
    // }

    // const generateCarousel = (header) => {
    //     return (
    //         <Container>
    //             <h2>{header}</h2>
    //             <Carousel>
    //                 {plants ? plants.map(plant => {
    //                     if(categoryType(header, plant)) return (
    //                         <Carousel.Item interval={3000} key={plant.id} onClick={() => history.push(`plants/${plant.id}`)}>
    //                             <CarouselPlants />
    //                         </Carousel.Item>
    //                     )
    //                 }) : null}
    //             </Carousel>
    //         </Container>
    //     )
    // }

    if(!searchedPlants) return (
        <CarouselPlants />
        // <Container>
        //     <h1>{`Welcome ${user.username}!`}</h1>
        //     {generateCarousel('Edible')}
        //     {generateCarousel('Safe For Pets')}
        //     {generateCarousel('Has Flowers')}
        // </Container>       
    )
    else return(
        <SearchedPlants searchedPlants={searchedPlants} />
        // <Container>
        //     <h1>{`Welcome ${user.username}!`}</h1>
        //     <ListGroup> 
        //         {plants ? plants.map((plant) => {
        //             if(!searchedPlants || plant.name.toLowerCase().startsWith(searchedPlants.toLowerCase())) return <SearchedPlants key={plant.id} plant={plant} />
        //         }) : null}
        //     </ListGroup>
        // </Container>
    )
}
