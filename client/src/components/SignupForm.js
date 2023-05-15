import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from "react-bootstrap/Container";

import ResponseError from "../components/ResponseError"

export default function SignupForm({ onCloseModal }) {
    const formDataDefault = {
        email: '',
        username: '',
        password: '',
        password_confirmation: ''
    }

    const [formData, setFormData] = useState(formDataDefault)
    const [signupError, setSignupError] = useState([])
    const [showPassword, setShowPassword] = useState(false)

    const handleTogglePassword = () => setShowPassword(!showPassword)

    const handleChange = e => {
        if(signupError) setSignupError([])
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()

        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({...formData})
        })
        .then(r => {
            if(r.ok){
                setFormData(formDataDefault)
                onCloseModal()
            } else r.json().then(err => setSignupError(err.errors))
        })
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email Address *</Form.Label>
                    <Form.Control required
                                type='email' 
                                placeholder="Enter email address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange} />
                </Form.Group>
                <Form.Group className="pt-2">
                    <Form.Label>Username *</Form.Label>
                    <Form.Control required
                                placeholder="Enter username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange} />
                </Form.Group>
                <Form.Group className="pt-2">
                    <Form.Label>Password *</Form.Label>
                    <InputGroup>
                        <Form.Control required
                                    type={showPassword ? "text" : "password" }
                                    placeholder="Enter password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange} />
                        <Button variant="outline-success" onMouseUp={handleTogglePassword} onMouseDown={handleTogglePassword}>Show Password</Button>
                    </InputGroup>
                    <Form.Text className="text-muted">
                        Passwords must contain between 6 and 20 characters<br/>
                        Passwords must contain at least one uppercase letter, one lowercase letter, and one number<br/>
                        Passwords must contain at least one of the following symbols: !@#$%^&*()_+
                    </Form.Text>
                </Form.Group>
                <Form.Group className="pt-2">
                    <Form.Label>Password Confirmation *</Form.Label>
                    <Form.Control required
                                type={showPassword ? "text" : "password" }
                                placeholder="Enter password confirmation"
                                name="password_confirmation" 
                                value={formData.password_confirmation} 
                                onChange={handleChange} />
                </Form.Group>
                <Container className="pt-2 pb-2">
                {signupError ? signupError.map((e, index) => <ResponseError key={index} responseItem={e} />) : null}
                </Container>
                <Button className="signup-btn" variant="success" type="submit">Create Account</Button>
            </Form>
        </Container>
    )
}