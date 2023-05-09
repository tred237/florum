import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col'

import { UserContext } from '../context/User';
import PlantCard from "../components/PlantCard"
import Loading from '../components/Loading';

export default function MyPlants({ searchedPlants }) {
    const { user } = useContext(UserContext);

    if(!user.owned_plants) <Loading />
    else return(
        <Container>
            <h1>My Plants</h1>
            <Row md={4}>
                {user.owned_plants ? user.owned_plants.filter(plant => !searchedPlants || plant.name.toLowerCase().startsWith(searchedPlants.toLowerCase())).map((plant) => <Col key={plant.id}><PlantCard plant={plant} /></Col>) : null}
            </Row>
        </Container>
    )
}