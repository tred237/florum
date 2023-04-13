import { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import { UserContext } from '../context/User';
import LoginForm from '../components/LoginForm';

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
                r.json().then(user => setUser(user))
                history.push("/")
            } else {
                r.json().then(err => setLoginError(err.error))
            }
        })
    }

    return (
        <div>
            <LoginForm formData={formData}
                       loginError={loginError}
                       handleSubmit={handleSubmit}
                       handleChange={handleChange}/>
            <Button variant="success" type="click" onClick={onLoginTransitionClick}>Sign up</Button>
        </div>
    )
}