import Modal from 'react-bootstrap/Modal';
import EditPlantForm from '../components/EditPlantForm';

export default function EditPlantModal({ showModal, onCloseModal }) {
    return (
        <Modal show={showModal} onHide={onCloseModal} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Edit plant</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditPlantForm onCloseModal={onCloseModal} />
            </Modal.Body>
        </Modal>
    )
}