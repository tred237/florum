import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { UserContext } from "../context/User";
import EditForumEntryModal from "../modals/EditForumEntryModal";

export default function PlantForumEntry({ entryInfo, onForumEntryEdit }) {
    const { user } = useContext(UserContext)
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    return (
        <Container className="pt-3">
            <Card>
                <Card.Header>
                    <p>{`${entryInfo.entry_username}  ${entryInfo.created_at} `}<i>{entryInfo.edited ? 'Edited' : null}</i></p>
                    {user.id === entryInfo.user_id ? <Button variant="success" onClick={handleShowModal}>Edit</Button> : null}
                </Card.Header>
                <Card.Body>
                    <p>{entryInfo.entry}</p>
                </Card.Body>
            </Card>
            <EditForumEntryModal entryInfo={entryInfo} showModal={showModal} onCloseModal={handleCloseModal} onForumEntryEdit={onForumEntryEdit}/>
        </Container>
    )
}