import { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { UserContext } from '../context/User';

export default function Login({ onLoginTransitionClick }) {
    const formDataDefault = {
        username: '',
        password: ''
    }

    const { setUser } = useContext(UserContext)
    const [formData, setFormData] = useState(formDataDefault)
    const history = useHistory()

    const handleChange = e => setFormData({...formData, [e.target.name]:e.target.value})

    const handleSubmit = e => {
        e.preventDefault()

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'username': {...formData}.username,
                'password': {...formData}.password,
            })
        })
        .then(r => {
            if(r.ok) {
                r.json().then(data => setUser(data.username))
                history.push("/")
            }
        })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter username" name="username" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" name="password" onChange={handleChange}/>
                </Form.Group>
                <Button variant="success" type="submit">Log in</Button>
            </Form>
            <Button variant="success" type="click" onClick={onLoginTransitionClick}>Sign up</Button>
        </div>
    )
}