import { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { UserContext } from '../context/User';
import PlantButtons from './PlantButtons';

export default function PlantInformation({ plant, setPlant }) {
    const { user } = useContext(UserContext)

    return (
        <ListGroup className="w-50">
            <ListGroup.Item>{`Name: ${plant.name}`}</ListGroup.Item>
            <ListGroup.Item>{`Climate: ${plant.climate}`}</ListGroup.Item>
            <ListGroup.Item>{`Light: ${plant.light}`}</ListGroup.Item>
            <ListGroup.Item>{`Water: ${plant.water}`}</ListGroup.Item>
            <ListGroup.Item>{`Typical Size: ${plant.size}`}</ListGroup.Item>
            <ListGroup.Item>{`Has Flowers: ${plant.blooms ? 'Yes' : 'No'}`}</ListGroup.Item>
            <ListGroup.Item>{`Safe For Pets: ${plant.safe_for_pets ? 'Yes' : 'No'}`}</ListGroup.Item>
            <ListGroup.Item>{`Edible: ${plant.edible ? 'Yes' : 'No'}`}</ListGroup.Item>
            <ListGroup.Item>{`Creator: ${plant.owner ? plant.owner.username : null}`}</ListGroup.Item>
            {plant.owner && plant.owner.id === user.id 
                ? 
                    <ListGroup.Item>
                        <PlantButtons plant={plant} setPlant={setPlant} />
                    </ListGroup.Item>
                : null
            }
        </ListGroup>
    )
}