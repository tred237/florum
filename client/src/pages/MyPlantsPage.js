import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import PlantCard from "../components/PlantCard"
import { PlantsContext } from '../context/Plants';
import Loading from '../components/Loading';

export default function MyPlants() {
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
            <ListGroup> 
                {myPlants ? myPlants.map((plant) => <PlantCard key={plant.id} plant={plant} />) : null}
            </ListGroup>
        </Container>
    )
}