import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';

export default function PlantForumEntry({ entryInfo }) {
    return (
        <ListGroup.Item>
            <Card>
                <Card.Header>
                    <p>{`${entryInfo.entry_username}  ${entryInfo.created_at}`}</p>
                </Card.Header>
                <Card.Body>
                    <p>{entryInfo.entry}</p>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    )
}