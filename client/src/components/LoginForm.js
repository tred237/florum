import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function LoginForm({ formData, loginError, handleSubmit, handleChange }) {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}