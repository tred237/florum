import ListGroup from 'react-bootstrap/ListGroup';

export default function PlantInformation({ plant }) {
    return (
        <ListGroup>
            <ListGroup.Item>{`Name: ${plant.name}`}</ListGroup.Item>
            <ListGroup.Item>{`Climate: ${plant.climate}`}</ListGroup.Item>
            <ListGroup.Item>{`Light: ${plant.light}`}</ListGroup.Item>
            <ListGroup.Item>{`Water: ${plant.water}`}</ListGroup.Item>
            <ListGroup.Item>{`Typical Size: ${plant.size}`}</ListGroup.Item>
            <ListGroup.Item>{`Has Flowers: ${plant.blooms ? 'Yes' : 'No'}`}</ListGroup.Item>
            <ListGroup.Item>{`Safe For Pets: ${plant.safe_for_pets ? 'Yes' : 'No'}`}</ListGroup.Item>
            <ListGroup.Item>{`Edible: ${plant.edible ? 'Yes' : 'No'}`}</ListGroup.Item>
            <ListGroup.Item>{`Creator: ${plant.owner ? plant.owner.username : null}`}</ListGroup.Item>
        </ListGroup>
    )
}