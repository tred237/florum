import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function PlantCard({ plant }){
    return(
        <ListGroup.Item>
            <Card>
                <Card.Img variant="top" src={plant.image} alt={plant.name} />
                    <Card.Body>
                        <Card.Text>
                            {plant.name}
                        </Card.Text>
                    </Card.Body>
            </Card>
        </ListGroup.Item>
    )
}

export default PlantCard