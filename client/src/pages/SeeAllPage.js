import { useContext, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PlantCard from "../components/PlantCard"
import { PlantsContext } from '../context/Plants';

export default function SeeAllPage({ searchedPlants, climateType, category }) {
    const { plants } = useContext(PlantsContext);
    const [filteredPlants, setFilteredPlants] = useState([])

    useEffect(() => {
        if(plants && climateType) setFilteredPlants(plants.filter(plant => plant.climate === climateType))
        else if(plants && category !== 'All Plants') {
            setFilteredPlants(
                plants.filter(plant => {
                    if(category === 'Edible') return plant.edible
                    else if(category === 'Safe For Pets') return plant.safe_for_pets
                    else return plant.blooms
                })
            )
        }
        else setFilteredPlants([...plants])
    },[plants, climateType, category])

    return(
        <Container>
            <h1>{climateType ? `${climateType} Climate Plants` : `${category}`}</h1>
                <Row md={4}>
                    {filteredPlants ? filteredPlants.filter(plant => !searchedPlants || plant.name.toLowerCase().startsWith(searchedPlants.toLowerCase())).map((plant) => <Col><PlantCard key={plant.id} plant={plant} /></Col>) : null}
                </Row>
        </Container>
    )
}
