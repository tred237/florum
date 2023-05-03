import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

import florumlogo from "../img/florumlogo.png";

export default function PlantCard({ plant }){
    const [hover, setHover] = useState(false)
    const history = useHistory()

    return(
        <ListGroup.Item>
            <Card style={{opacity: hover ? 0.8 : 1}} 
                  onMouseOver={() => setHover(true)}
                  onMouseOut={() => setHover(false)} 
                  onClick={() => history.push(`plants/${plant.id}`)}>
                <Card.Img className="d-block w-100" variant="top" src={florumlogo} alt={plant.name} />
                    <Card.Body>
                        <Card.Text className="position-absolute start-50 translate-middle">
                            {plant.name}
                        </Card.Text>
                    </Card.Body>
            </Card>
        </ListGroup.Item>
    )
}