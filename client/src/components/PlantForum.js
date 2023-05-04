import { useState } from "react";
import Button from "react-bootstrap/Button"
import ListGroup from 'react-bootstrap/ListGroup';

import PlantForumEntry from "./PlantForumEntry";
import AddForumEntryModal from "../modals/AddForumEntryModal";

export default function PlantForum({ plant, onForumEntrySubmit, onForumEntryEdit }) {
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    return (
        <>
            <Button onClick={handleShowModal}>Comment</Button>
            <ListGroup>
                {plant.forum_entries.map(e => <PlantForumEntry key={e.id} entryInfo={e} onForumEntryEdit={onForumEntryEdit} />)}
            </ListGroup>
            <AddForumEntryModal plantId={plant.id} showModal={showModal} onCloseModal={handleCloseModal} onForumEntrySubmit={onForumEntrySubmit} />
        </>
    )
}