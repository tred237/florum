import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import florumlogo from "../img/florumlogo.png";
import SignupModal from '../modals/SignUpModal';
import Stack from 'react-bootstrap/esm/Stack';

export default function NavBarLoggedOut() {
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    return (
        <>
            <Navbar className="nav-bar-style" variant='dark'>
                <Container>
                <Navbar.Brand>
                    <Stack  direction="horizontal" gap={3}>
                    <img alt="" src={florumlogo} width="50" height="50" className="d-inline-block align-top"/>{' '}
                    <p className="text-center pt-2">Florum</p>
                    </Stack>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link  onClick={handleShowModal}>Signup</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <SignupModal showModal={showModal} onCloseModal={handleCloseModal} />
        </>
    )
}