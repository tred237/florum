import React from 'react';
import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

import { UserContext } from '../context/User';
import AddPlantModal from '../modals/AddPlantModal';

export default function NavBarLoggedIn({ searchedPlants, onSearchChange }) {
    const { setUser } = useContext(UserContext)
    const [showModal, setShowModal] = useState(false)
    // const [formData, setFormData] = useState('')
    const history = useHistory()

    const handleShowModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    // const handleChange = (e) => setFormData(e.target.value)

    const handleLogoutClick = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(r => {
            if(r.ok) {
                history.push("/login")
                setUser(null)
            } else console.log("Logout unsuccessful")
        })
    }

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Florum</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/my-plants">My Plants</Nav.Link>
                        <Nav.Link onClick={handleShowModal}>Add Plant</Nav.Link>
                        <Nav.Link onClick={handleLogoutClick}>Logout</Nav.Link>
                    </Nav>
                    <Form>
                        <Form.Control type="search" placeholder="Search plants" value={searchedPlants} onChange={onSearchChange}/>
                    </Form>
                </Container>
            </Navbar>
            <AddPlantModal showModal={showModal} onCloseModal={handleCloseModal} />
        </React.Fragment>
    )
}