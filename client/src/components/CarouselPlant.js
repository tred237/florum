import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import florumlogo from "../img/florumlogo.png";

export default function CarouselPlant({ plant }){
    const [hover, setHover] = useState(false)
    const history = useHistory()
    return(
        <Card onClick={() => history.push(`plants/${plant.id}`)}>
            <img className="d-block w-100" 
                style={{opacity: hover ? 0.8 : 1}} 
                src={florumlogo} alt={florumlogo} 
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)} />
            <Card.Title className="justify-content-center align-items-center" >
                <h3>{plant.name}</h3>
            </Card.Title>
        </Card>
    )
}