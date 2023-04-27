import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

export default function SearchedPlantCard({ plant }){
    const [hover, setHover] = useState(false)
    const history = useHistory()

    const cardStyle = {
        background: "green",
        opacity: hover ? 0.8 : 1
    }

    return(
        <ListGroup.Item>
            <Card style={cardStyle} 
                  onMouseOver={() => setHover(true)}
                  onMouseOut={() => setHover(false)} 
                  onClick={() => history.push(`plants/${plant.id}`)}>
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