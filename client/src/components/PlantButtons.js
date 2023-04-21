import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import EditPlantModal from '../modals/EditPlantModal';

import { PlantsContext } from '../context/Plants';

export default function PlantButtons({ plant, setPlant }) {
    const { plants, setPlants } = useContext(PlantsContext)
    const [showModal, setShowModal] = useState(false)
    const history = useHistory()

    const handleShowModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    const handlePlantDelete = () => {
        fetch(`/plants/${plant.id}`, {
            method: "DELETE"
        })
        .then(r => {
            if(r.ok) {
                const updatedPlants = plants.filter(e => e.id !== plant.id)
                setPlants(updatedPlants)
                history.push("/home")
            }
        })
    }

    return (
        <>
            <Col>
                <Button onClick={handleShowModal}>Edit</Button>
            </Col>
            <Col>
                <Button onClick={handlePlantDelete}>Delete</Button>
            </Col>
            <EditPlantModal plant={plant} setPlant={setPlant} showModal={showModal} onCloseModal={handleCloseModal} />
        </>
    )
}