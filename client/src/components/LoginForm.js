import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from "react-bootstrap/Container";

export default function LoginForm({ formData, loginError, handleSubmit, handleChange }) {
    const [showPassword, setShowPassword] = useState(false)

    const handleTogglePassword = () => setShowPassword(!showPassword)

    return (
        <>
            <Form className="login-signup-form" onSubmit={handleSubmit}>
                <Form.Group className="pt-2">
                    <Form.Label>Email Address or Username</Form.Label>
                    <Form.Control placeholder="Enter email address or username" 
                                name="email_or_username" 
                                value={formData.email_or_username}
                                onChange={handleChange} />
                </Form.Group>
                <Form.Group className="pt-2">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                        <Form.Control type={showPassword ? "text" : "password" }
                                    placeholder="Enter password" 
                                    name="password" 
                                    value={formData.password}
                                    onChange={handleChange}/>
                        <Button variant="outline-success" onMouseUp={handleTogglePassword} onMouseDown={handleTogglePassword}>Show Password</Button>
                    </InputGroup>
                </Form.Group>
                <Container className="pt-2 pb-2">
                {loginError ? <p className="error-message">{loginError}</p> : null}
                </Container>
                <Button variant="success" type="submit">Log in</Button>
            </Form>
        </>
    )
}