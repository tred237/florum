import Modal from 'react-bootstrap/Modal';
import SignupForm from "../components/SignupForm";

export default function SignupModal({ showModal, onCloseModal }) {
    return (
        <Modal show={showModal} onHide={onCloseModal} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Create Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SignupForm onCloseModal={onCloseModal} />
            </Modal.Body>
        </Modal>
    )
}