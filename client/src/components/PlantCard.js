import Card from 'react-bootstrap/Card';

function PlantCard({ plant }){
    return(
        <li>
            <Card>
                <Card.Img variant="top" src={plant.image} alt={plant.name} />
                    <Card.Body>
                        <Card.Text>
                            {plant.name}
                        </Card.Text>
                    </Card.Body>
            </Card>
        </li>
    )
}

export default PlantCard