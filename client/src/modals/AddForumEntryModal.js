import Modal from 'react-bootstrap/Modal';
import AddForumEntry from '../components/AddForumEntry';

export default function AddForumEntryModal({ showModal, onCloseModal, onForumEntrySubmit }) {
    return (
        <Modal show={showModal} onHide={onCloseModal} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add A Comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddForumEntry onCloseModal={onCloseModal} onForumEntrySubmit={onForumEntrySubmit} />
            </Modal.Body>
        </Modal>
    )
}