import { useState } from "react";
import { useHistory } from "react-router-dom";

import SignupForm from "../components/SignupForm";
import Container from "react-bootstrap/Container";

export default function SignupPage() {
    const formDataDefault = {
        email: '',
        username: '',
        password: '',
        password_confirmation: ''
    }

    const [formData, setFormData] = useState(formDataDefault)
    const [signupError, setSignupError] = useState([])
    const history = useHistory()

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
                history.push('/login')
            } else r.json().then(err => setSignupError(err.errors))
        })
    }

    return (
        <Container>
            <SignupForm formData={formData} 
                        signupError={signupError} 
                        handleSubmit={handleSubmit} 
                        handleChange={handleChange}/>
        </Container>
    )
}