import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import florumlogo from "../img/florumlogo.png";

export default function CarouselPlant({ plant }){
    const [hover, setHover] = useState(false)
    return(
        <>
            <img className="d-block w-100" 
                style={{opacity: hover ? 0.8 : 1}} 
                src={florumlogo} alt={florumlogo} 
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)} />
            <Carousel.Caption >
                <h3>{plant.name}</h3>
            </Carousel.Caption>
        </>
    )
}