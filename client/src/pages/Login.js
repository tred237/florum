import { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { UserContext } from '../context/User';

export default function Login({ onLoginTransitionClick }) {
    const formDataDefault = {
        email_or_username: '',
        password: ''
    }

    const { setUser } = useContext(UserContext)
    const [formData, setFormData] = useState(formDataDefault)
    const [loginError, setLoginError] = useState(null)
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
                'email_or_username': {...formData}.email_or_username,
                'password': {...formData}.password,
            })
        })
        .then(r => {
            if(r.ok) {
                r.json().then(user => setUser(user.username))
                history.push("/")
            } else {
                r.json().then(err => setLoginError(err.error))
            }
        })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email Address or Username</Form.Label>
                    <Form.Control placeholder="Enter email address or username" 
                                name="email_or_username" 
                                value={formData.email_or_username}
                                onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" 
                                placeholder="Enter password" 
                                name="password" 
                                value={formData.password}
                                onChange={handleChange}/>
                </Form.Group>
                <p>{loginError}</p>
                <Button variant="success" type="submit">Log in</Button>
            </Form>
            <Button variant="success" type="click" onClick={onLoginTransitionClick}>Sign up</Button>
        </div>
    )
}