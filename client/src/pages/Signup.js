import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import SignupForm from "../components/SignupForm";

export default function Signup({ onLoginTransitionClick }) {
    const formDataDefault = {
        email: '',
        username: '',
        password: '',
        passwordConfirmation: ''
    }

    const [formData, setFormData] = useState(formDataDefault)
    const [signupError, setSignupError] = useState([])
    const history = useHistory()

    const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value})

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
                history.push('/login')
            } else r.json().then(err => setSignupError(err.errors))
        })
    }

    return (
        <div>
            <SignupForm formData={formData} 
                        signupError={signupError} 
                        handleSubmit={handleSubmit} 
                        handleChange={handleChange}/>
            <Button variant="success" type="click" onClick={onLoginTransitionClick}>Log in</Button>
        </div>
    )
}