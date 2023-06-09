import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import florumlogo from "../img/florumlogo.png";

export default function PlantCard({ plant, categoryType, isCarousel=false }){
    const [hover, setHover] = useState(false)
    const history = useHistory()

    const plantImage = () => {
        let errored = false
        try {
            require(`../img/${plant.image}`)
        }
        catch(err) {
            errored = true
        }

        if(errored) return plant.image 
        else return require(`../img/${plant.image}`)
    }

    if(categoryType) return(
        <Card className={isCarousel ? 'carousel-card-sizing' : 'card-sizing'}
            style={{opacity: hover ? 0.8 : 1}} 
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onClick={() => history.push(`/categories-${categoryType}`)}>
            <Card.Img className='plant-image' variant="top" src={florumlogo} alt="See All" />
            <Card.Body className='text-center'>
                <Card.Text>See all</Card.Text>
            </Card.Body>
        </Card>
    )
    else return(
        <Card className={isCarousel ? 'carousel-card-sizing' : 'card-sizing'}
            style={{opacity: hover ? 0.8 : 1}} 
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)} 
            onClick={() => history.push(`plants/${plant.id}`)}>
            <Card.Img className='plant-image' variant="top" src={plantImage()} alt={plant.name} onError={(e) => e.target.src = florumlogo} />
            <Card.Body className='text-center'>
                <Card.Text>{plant.name}</Card.Text>
            </Card.Body>
        </Card>
    )
}