import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import florumlogo from "../img/florumlogo.png";

export default function ClimateCard({ climateType }) {
    const [hover, setHover] = useState(false)
    const history = useHistory()

    return (
        <Card className='p-1' 
            style={{opacity: hover ? 0.8 : 1}} 
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)} 
            onClick={() => history.push(`climates-${climateType.toLowerCase()}`)}>
            <Card.Img className="d-block w-100" variant="top" src={florumlogo} alt={`${climateType} Climate Plants`} />
            <Card.Body>
                <Card.Text className='position-absolute start-50 translate-middle'>
                    {`${climateType}`}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}