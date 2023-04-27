import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import { UserContext } from '../context/User';
import { PlantsContext } from '../context/Plants';
import SearchedPlantCard from './SearchedPlantCard';

export default function HomePage({ searchedPlants }) {
    const { user } = useContext(UserContext);
    const { plants } = useContext(PlantsContext);

    return(
        <Container>
            <h1>{`Welcome ${user.username}!`}</h1>
            <ListGroup>
                <p>test</p>
                {plants ? plants.map((plant) => {
                    if(!searchedPlants || plant.name.toLowerCase().startsWith(searchedPlants.toLowerCase())) return <SearchedPlantCard key={plant.id} plant={plant} />
                }) : null}
            </ListGroup>
        </Container>
    )
}
