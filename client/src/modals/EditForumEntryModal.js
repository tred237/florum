import Modal from 'react-bootstrap/Modal';
import EditForumEntry from '../components/EditForumEntry';

export default function EditForumEntryModal({ entryInfo, showModal, onCloseModal, onForumEntryEdit }) {
    return (
        <Modal show={showModal} onHide={onCloseModal} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditForumEntry entryInfo={entryInfo} onCloseModal={onCloseModal} onForumEntryEdit={onForumEntryEdit} />
            </Modal.Body>
        </Modal>
    )
}