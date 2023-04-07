import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Signup() {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" placeholder="Enter password confirmation"/>
            </Form.Group>
            <Button variant="success" type="submit">Create Account</Button>
        </Form>
    )
}