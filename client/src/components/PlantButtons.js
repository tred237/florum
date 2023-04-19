import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import EditPlantModal from '../modals/EditPlantModal';

export default function PlantButtons({ plant, setPlant }) {
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    return (
        <>
            <Col>
                <Button onClick={handleShowModal}>Edit</Button>
            </Col>
            <Col>
                <Button>Delete</Button>
            </Col>
            <EditPlantModal plant={plant} setPlant={setPlant} showModal={showModal} onCloseModal={handleCloseModal} />
        </>
    )
}