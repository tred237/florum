import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import { UserContext } from '../context/User';
import { PlantsContext } from '../context/Plants';
import EditPlantModal from '../modals/EditPlantModal';

export default function PlantButtons({ plant, setPlant }) {
    const { user, setUser } = useContext(UserContext)
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
                const updatedUser = {...user}
                const updatedPlants = plants.filter(e => e.id !== plant.id)
                updatedUser.owned_plants = updatedPlants
                setUser(updatedUser)
                setPlants(updatedPlants)
                history.push("/home")
            }
        })
    }

    return (
        <>
            <Stack direction='horizontal' gap={2}>
                <Button onClick={handleShowModal}>Edit</Button>
                <Button onClick={handlePlantDelete}>Delete</Button>
            </Stack>
            <EditPlantModal plant={plant} setPlant={setPlant} showModal={showModal} onCloseModal={handleCloseModal} />
        </>
    )
}