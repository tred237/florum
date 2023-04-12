import { useState } from "react";
import { useHistory } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import ResponseError from "../components/ResponseError"

export default function Signup({ onLoginTransitionClick }) {
    const formDataDefault = {
        username: '',
        password: '',
        passwordConfirmation: ''
    }

    const [formData, setFormData] = useState(formDataDefault)
    const [signupError, setSignupError] = useState([])
    const history = useHistory()

    const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'username': {...formData}.username,
                'password': {...formData}.password,
                'password_confirmation': {...formData}.passwordConfirmation
            })
        })
        .then(r => {
            r.ok ? history.push('/login') : r.json().then(data => setSignupError(data.errors))
        })

        setFormData(formDataDefault)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
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
                <ListGroup>
                    {signupError ? signupError.map((e,index) => <ResponseError key={index} responseItem={e} />) : null}
                </ListGroup>
                <Button variant="success" type="submit">Create Account</Button>
            </Form>
            <Button variant="success" type="click" onClick={onLoginTransitionClick}>Log in</Button>
        </div>
    )
}