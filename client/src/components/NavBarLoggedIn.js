import React from 'react';
import { useState, useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

import { UserContext } from '../context/User';
import AddPlantModal from '../modals/AddPlantModal';
import florumlogo from "../img/florumlogo.png";

export default function NavBarLoggedIn({ searchedPlants, onSearchChange }) {
    const { setUser } = useContext(UserContext)
    const [showModal, setShowModal] = useState(false)
    const history = useHistory()

    const location = useLocation()

    const handleShowModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

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
        <>
            <Navbar className="nav-bar-style" variant='dark'>
                <Container className='w-75'>
                    <Navbar.Brand as={Link} to="/home">
                    <Stack  direction="horizontal" gap={3}>
                        <img alt="" src={florumlogo} width="50" height="50" className="d-inline-block align-top"/>{' '}
                        <p className="florum-logo-nav">Florum</p>
                    </Stack>
                    </Navbar.Brand>
                    <Nav className={location.pathname !== '/home' && !location.pathname.startsWith('/plants/') ? "me-auto" : null}>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/my-plants">My Plants</Nav.Link>
                        <Nav.Link as={Link} to="/commented-plants">Commented Plants</Nav.Link>
                        <Nav.Link onClick={handleShowModal}>Add Plant</Nav.Link>
                        <Nav.Link onClick={handleLogoutClick}>Logout</Nav.Link>
                    </Nav>
                    {location.pathname !== '/home' && !location.pathname.startsWith('/plants/') 
                        ? <Form>
                            <Form.Control type="search" placeholder="Search plants" value={searchedPlants} onChange={onSearchChange}/>
                          </Form>
                        : null}
                </Container>
            </Navbar>
            <AddPlantModal showModal={showModal} onCloseModal={handleCloseModal} />
        </>
    )
}