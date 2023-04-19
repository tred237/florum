import ListGroup from 'react-bootstrap/ListGroup';

export default function PlantInformation({ plant }) {
    return (
        <ListGroup>
            <ListGroup.Item>{`Name: ${plant.name}`}</ListGroup.Item>
            <ListGroup.Item>{`Light: ${plant.light}`}</ListGroup.Item>
            <ListGroup.Item>{`Water: ${plant.water}`}</ListGroup.Item>
            <ListGroup.Item>{`Average Size: ${plant.size}`}</ListGroup.Item>
            <ListGroup.Item>{`Creator: ${plant.owner.username}`}</ListGroup.Item>
        </ListGroup>
    )
}