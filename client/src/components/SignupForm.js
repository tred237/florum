// import React from 'react';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';

import ResponseError from "../components/ResponseError"

export default function SignupForm({ formData, signupError, handleSubmit, handleChange }) {
    const [showPassword, setShowPassword] = useState(false)

    const handleTogglePassword = () => setShowPassword(!showPassword)

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' 
                            placeholder="Enter email address"
                            name="email"
                            value={formData.email}
                            onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Enter username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <InputGroup>
                    <Form.Control type={showPassword ? "text" : "password" }
                                placeholder="Enter password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange} />
                    <Button variant="outline-success" onMouseUp={handleTogglePassword} onMouseDown={handleTogglePassword}>Show Password</Button>
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type={showPassword ? "text" : "password" }
                            placeholder="Enter password confirmation"
                            name="password_confirmation" 
                            value={formData.password_confirmation} 
                            onChange={handleChange} />
            </Form.Group>
            <ListGroup>
                {signupError ? signupError.map((e, index) => <ResponseError key={index} responseItem={e} />) : null}
            </ListGroup>
            <Button variant="success" type="submit">Create Account</Button>
        </Form>
    )
}