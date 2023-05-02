import { useContext, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import PlantCard from "../components/PlantCard"
import { PlantsContext } from '../context/Plants';

export default function ClimatePage({ searchedPlants, climateType }) {
    const { plants } = useContext(PlantsContext);
    const [climatePlants, setClimatePlants] = useState([])

    useEffect(() => {
        if(plants) setClimatePlants(plants.filter(plant => plant.climate === climateType))
    },[plants])

    console.log(plants)

    return(
        <Container>
            <h1>{`${climateType} Climate Plants`}</h1>
            <ListGroup> 
                {climatePlants ? climatePlants.map((plant) => {
                    if(!searchedPlants || plant.name.toLowerCase().startsWith(searchedPlants.toLowerCase())) return <PlantCard key={plant.id} plant={plant} />
                }) : null}
            </ListGroup>
        </Container>
    )
}
