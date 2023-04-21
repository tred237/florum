import Button from "react-bootstrap/Button"
import ListGroup from 'react-bootstrap/ListGroup';
import PlantForumEntry from "./PlantForumEntry";

export default function PlantForum({ forumEntries, setPlant }) {
    return (
        <>
            <Button>Comment</Button>
            <ListGroup>
                {forumEntries.map(e => <PlantForumEntry key={e.id} entryInfo={e} />)}
            </ListGroup>
        </>
    )
}