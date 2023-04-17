import Modal from 'react-bootstrap/Modal';
import AddPlantForm from '../components/AddPlantForm';

export default function AddPlantModal({ showModal, onCloseModal }) {
    return (
        <Modal show={showModal} onHide={onCloseModal} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add a new plant</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddPlantForm onCloseModal={onCloseModal} />
            </Modal.Body>
        </Modal>
    )
}