import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col'

import PlantCard from "../components/PlantCard"
import { PlantsContext } from '../context/Plants';
import Loading from '../components/Loading';

export default function MyPlants({ searchedPlants }) {
    const { plants } = useContext(PlantsContext);
    const [myPlants, setMyPlants] = useState([])

    useEffect(() => {
        fetch('/plants/my-plants')
        .then(r => {
            if(r.ok) r.json().then(p => setMyPlants(p))
        })
    },[plants])

    if(!myPlants) <Loading />
    else return(
        <Container>
            <h1>My Plants</h1>
            <Row md={4}>
                {myPlants ? myPlants.filter(plant => !searchedPlants || plant.name.toLowerCase().startsWith(searchedPlants.toLowerCase())).map((plant) => <Col><PlantCard key={plant.id} plant={plant} /></Col>) : null}
            </Row>
        </Container>
    )
}