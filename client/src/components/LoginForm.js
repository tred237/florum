import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

export default function LoginForm({ formData, loginError, handleSubmit, handleChange }) {
    const [showPassword, setShowPassword] = useState(false)

    const handleTogglePassword = () => setShowPassword(!showPassword)

    return (
        <>
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
                    <InputGroup>
                        <Form.Control type={showPassword ? "text" : "password" }
                                    placeholder="Enter password" 
                                    name="password" 
                                    value={formData.password}
                                    onChange={handleChange}/>
                        <Button variant="outline-success" onMouseUp={handleTogglePassword} onMouseDown={handleTogglePassword} >Show Password</Button>
                    </InputGroup>
                </Form.Group>
                {loginError ? <p>{loginError}</p> : null}
                <Button variant="success" type="submit">Log in</Button>
            </Form>
        </>
    )
}