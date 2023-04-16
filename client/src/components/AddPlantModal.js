import Modal from 'react-bootstrap/Modal';
import AddPlant from '../pages/AddPlant';

export default function AddPlantModal({ showModal, onCloseModal }) {
    return (
        <Modal show={showModal} onHide={onCloseModal} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add a new plant</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <AddPlant /> */}
            </Modal.Body>
        </Modal>
    )
}