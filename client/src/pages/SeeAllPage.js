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
        <Container className='w-75 pt-4'>
            <h1 className='see-all-header'>{climateType ? `${climateType} Climate Plants` : `${category}`}</h1>
            <Container className="see-all-container">
                <Row className="see-all-row" md={3}>
                    {filteredPlants ? filteredPlants.filter(plant => !searchedPlants || plant.name.toLowerCase().startsWith(searchedPlants.toLowerCase())).map((plant) => {
                        return <Col className="see-all-col" key={plant.id}>
                                    <PlantCard plant={plant} isCarousel={false} />
                               </Col>
                    }) : null}
                </Row>
            </Container>
        </Container>
    )
}
