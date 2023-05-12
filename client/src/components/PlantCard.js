import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import florumlogo from "../img/florumlogo.png";

export default function PlantCard({ plant }){
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

    return(
        <Card style={{opacity: hover ? 0.8 : 1}} 
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)} 
                onClick={() => history.push(`plants/${plant.id}`)}>
            <Card.Img className="d-block img-thumbnail" variant="top" src={plantImage()} alt={plant.name} onError={(e) => e.target.src = florumlogo} />
                <Card.Body className="p-3 text-center">
                    <Card.Text>
                        {plant.name}
                    </Card.Text>
                </Card.Body>
        </Card>
    )
}