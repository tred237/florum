import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { UserContext } from '../context/User';
import PlantInformation from './PlantInformation';
import PlantButtons from './PlantButtons';
import PlantForum from './PlantForum';

export default function PlantDetails({ plant, setPlant }) {
    const { user } = useContext(UserContext)

    console.log(plant)

    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col>{plant.image}</Col>
                    </Row>
                    {plant.owner && plant.owner.id === user.id  ? <Row><PlantButtons plant={plant} setPlant={setPlant} /></Row> : null}
                </Col>
                <Col><PlantInformation plant={plant} /></Col>
            </Row>
            <h2>Description</h2>
            <Row>
                <Col>{plant.description}</Col>
            </Row>
            <PlantForum />
        </Container>
    )
}