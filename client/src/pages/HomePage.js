import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import PlantCard from "../components/PlantCard"
import { UserContext } from '../context/User';
import { PlantsContext } from '../context/Plants';

export default function HomePage() {
    const { user } = useContext(UserContext);
    const { plants } = useContext(PlantsContext);

    return(
        <Container>
            <h1>{`Welcome ${user.username}!`}</h1>
            <ListGroup> 
                {plants ? plants.map((plant) => <PlantCard key={plant.id} plant={plant} />) : null}
            </ListGroup>
        </Container>
    )
}
