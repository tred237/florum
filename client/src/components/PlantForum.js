import { useState, useContext } from "react";
import Button from "react-bootstrap/Button"
import ListGroup from 'react-bootstrap/ListGroup';

import { PlantContext } from "../context/Plant";
import PlantForumEntry from "./PlantForumEntry";
import AddForumEntryModal from "../modals/AddForumEntryModal";

export default function PlantForum({ onForumEntrySubmit, onForumEntryEdit }) {
    const { plant } = useContext(PlantContext)
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    return (
        <>
            <Button variant="success" onClick={handleShowModal}>Comment</Button>
            <ListGroup>
                {plant.forum_entries.map(e => <PlantForumEntry key={e.id} entryInfo={e} onForumEntryEdit={onForumEntryEdit} />)}
            </ListGroup>
            <AddForumEntryModal showModal={showModal} onCloseModal={handleCloseModal} onForumEntrySubmit={onForumEntrySubmit} />
        </>
    )
}