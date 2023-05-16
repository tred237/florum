import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import { UserContext } from '../context/User';
import { PlantsContext } from '../context/Plants';
import { PlantContext } from '../context/Plant';
import EditPlantModal from '../modals/EditPlantModal';

export default function PlantButtons() {
    const { user, setUser } = useContext(UserContext)
    const { plants, setPlants } = useContext(PlantsContext)
    const { plant } = useContext(PlantContext)
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
                const updatedPlants = plants.filter(p => p.id !== plant.id)
                updatedUser.owned_plants = updatedPlants.filter(p => p.owner.id === user.id)
                updatedUser.commented_plants = updatedUser.commented_plants.filter(p => p.id !== plant.id)
                setUser(updatedUser)
                setPlants(updatedPlants)
                history.push("/home")
            }
        })
    }

    return (
        <>
            <Stack direction='horizontal' gap={2}>
                <Button variant="success" onClick={handleShowModal}>Edit</Button>
                <Button variant="success" onClick={handlePlantDelete}>Delete</Button>
            </Stack>
            <EditPlantModal showModal={showModal} onCloseModal={handleCloseModal} />
        </>
    )
}