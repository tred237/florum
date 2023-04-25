import { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import { UserContext } from '../context/User';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
    const formDataDefault = {
        email_or_username: '',
        password: ''
    }

    const { setUser } = useContext(UserContext)
    const [formData, setFormData] = useState(formDataDefault)
    const [loginError, setLoginError] = useState(null)
    const history = useHistory()

    const handleChange = e => {
        if(loginError) setLoginError(null)
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({...formData})
        })
        .then(r => {
            if(r.ok) {
                r.json().then(user => {
                    setUser(user)
                    history.push("/home")
                })
            } else {
                r.json().then(err => setLoginError(err.error))
            }
        })
    }

    return (
        <Container className='login-signup-container'>
            <LoginForm formData={formData}
                    loginError={loginError}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}/>
        </Container>
    )
}