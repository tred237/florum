import { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { UserContext } from '../context/User';
import { PlantsContext } from '../context/Plants';

export default function EditPlantForm({ plant, setPlant, onCloseModal }) {
    const { user } = useContext(UserContext)
    const { plants, setPlants } = useContext(PlantsContext)

    const formDataDefault = {
        name: plant.name,
        image: plant.image,
        climate: plant.climate,
        light: plant.light,
        water: plant.water,
        size: plant.size,
        blooms: plant.blooms,
        description: plant.description,
        safe_for_pets: plant.safe_for_pets,
        edible: plant.edible
    }

    const [formData, setFormData] = useState(formDataDefault)

    const handleChange = e => setFormData({...formData, [e.target.name]:e.target.value})

    const handleSubmit = e => {
        e.preventDefault()

        if(user.id === plant.owner.id) {
            fetch(`/plants/${plant.id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({...formData})
            })
            .then(r => {
                if(r.ok) r.json().then((updatedPlant) => {
                    const updatedPlants = plants.filter(e => e.id !== updatedPlant.id)
                    setPlants([...updatedPlants, updatedPlant])
                    setPlant(updatedPlant)
                    onCloseModal()
                })
            })
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control required 
                                placeholder="Enter name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control required 
                                placeholder="Enter image url" 
                                name="image" 
                                value={formData.image}
                                onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Climate *</Form.Label>
                    <Form.Control required
                                as="select"
                                type="select"
                                name="climate"
                                value={formData.climate}
                                onChange={handleChange}>
                        <option value="">Select option</option>
                        <option value="Aquatic">Aquatic</option>
                        <option value="Continental">Continental</option>
                        <option value="Dry">Dry</option>
                        <option value="Polar">Polar</option>
                        <option value="Temperate">Temperate</option>
                        <option value="Tropical">Tropical</option>
                    </ Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Amount of Light</Form.Label>
                    <Form.Control required 
                                placeholder="Enter amount of light" 
                                name="light" 
                                value={formData.light}
                                onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Amount of Water</Form.Label>
                    <Form.Control required 
                                placeholder="Enter amount of water" 
                                name="water" 
                                value={formData.water}
                                onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Typical Size</Form.Label>
                    <Form.Control required 
                                placeholder="Enter average height" 
                                name="size" 
                                value={formData.size}
                                onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Has Flowers?</Form.Label>
                    <Form.Control required
                                as="select"
                                type="select"
                                name="blooms"
                                value={formData.blooms}
                                onChange={handleChange}>
                        <option value="">Select option</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </ Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Safe For Pets</Form.Label>
                    <Form.Control required
                                as="select"
                                type="select"
                                name="safe_for_pets"
                                value={formData.safe_for_pets}
                                onChange={handleChange}>
                        <option value="">Select option</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </ Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Is Edible? *</Form.Label>
                    <Form.Control required
                                as="select"
                                type="select"
                                name="edible"
                                value={formData.edible}
                                onChange={handleChange}>
                        <option value="">Select option</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </ Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" 
                                placeholder="Enter description" 
                                name="description" 
                                value={formData.description}
                                onChange={handleChange} />
                </Form.Group>
                <Button variant="success" type="submit">Add Plant</Button>
            </Form>
        </Container>
    )
}