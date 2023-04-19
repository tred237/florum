import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlantInformation from './PlantInformation';
import PlantButtons from './PlantButtons';

export default function PlantDetails({ plant }) {

    console.log(plant)

    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col>{plant.image}</Col>
                    </Row>
                    <Row><PlantButtons /></Row>
                </Col>
                <Col><PlantInformation plant={plant} /></Col>
            </Row>
            <h2>Description</h2>
            <Row>
                <Col>{plant.description}</Col>
            </Row>
        </Container>
    )
}