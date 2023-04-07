import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Signup() {
    const formDataDefault = {
        username: '',
        password: '',
        passwordConfirmation: ''
    }

    const [formData, setFormData] = useState(formDataDefault)

    const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

    return (
        <Form>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Enter username"
                              name="username"
                              value={formData.username}
                              onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                              placeholder="Enter password"
                              name="password"
                              value={formData.password}
                              onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" 
                              placeholder="Enter password confirmation"
                              name="passwordConfirmation" 
                              value={formData.passwordConfirmation} 
                              onChange={handleChange} />
            </Form.Group>
            <Button variant="success" type="submit">Create Account</Button>
        </Form>
    )
}