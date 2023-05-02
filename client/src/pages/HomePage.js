import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/esm/Stack';


import PlantCard from "../components/PlantCard"
import { UserContext } from '../context/User';
import { PlantsContext } from '../context/Plants';
import ClimateCard from '../components/ClimateCard';

export default function HomePage({ searchedPlants }) {
    const { user } = useContext(UserContext);
    const { plants } = useContext(PlantsContext);

    return(
        <Container>
            <h1>{`Welcome ${user.username}!`}</h1>
            <Stack direction="horizontal" className="h-100 align-items-center" gap={3}>
                {['Aquatic','Continental','Dry','Polar','Temperate','Tropical'].map(climate => <ClimateCard climateType={climate} />)}
            </Stack>
            <ListGroup> 
                {plants ? plants.map((plant) => {
                    if(!searchedPlants || plant.name.toLowerCase().startsWith(searchedPlants.toLowerCase())) return <PlantCard key={plant.id} plant={plant} />
                }) : null}
            </ListGroup>
        </Container>
    )
}
