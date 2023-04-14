import { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { UserContext } from '../context/User';

export default function AddPlant() {
    const { user } = useContext(UserContext)

    const formDataDefault = {
        name: '',
        image: '',
        light: '',
        water: '',
        size: '',
        description: '',
        safe_for_pets: '',
        owner_id: user.id
    }

    const [formData, setFormData] = useState(formDataDefault)

    const handleChange = e => setFormData({...formData, [e.target.name]:e.target.value})

    const handleSubmit = e => {
        e.preventDefault()
    }
    
    console.log(formData)

    return (
        <div>
            <h1>Add Plant</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name *</Form.Label>
                    <Form.Control required 
                                placeholder="Enter name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image URL *</Form.Label>
                    <Form.Control required 
                                placeholder="Enter image url" 
                                name="image" 
                                value={formData.image}
                                onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Amount of Light *</Form.Label>
                    <Form.Control required 
                                placeholder="Enter amount of light" 
                                name="light" 
                                value={formData.light}
                                onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Amount of Water *</Form.Label>
                    <Form.Control required 
                                placeholder="Enter amount of water" 
                                name="water" 
                                value={formData.water}
                                onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Average Height *</Form.Label>
                    <Form.Control required 
                                placeholder="Enter average height" 
                                name="size" 
                                value={formData.size}
                                onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Safe For Pets *</Form.Label>
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
                    <Form.Label>Description</Form.Label>
                    <Form.Control placeholder="Enter description" 
                                name="description" 
                                value={formData.description}
                                onChange={handleChange} />
                </Form.Group>
                <Button variant="success" type="submit">Add Plant</Button>
            </Form>
        </div>
    )
}