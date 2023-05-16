import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';

import florumlogo from "../img/florumlogo.png";
import SignupModal from '../modals/SignUpModal';

export default function NavBarLoggedOut() {
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    return (
        <>
            <Navbar className="nav-bar-style" variant='dark'>
                <Container className='w-75'>
                    <Navbar.Brand>
                        <Stack direction="horizontal" gap={3}>
                            <img alt="" src={florumlogo} width="50" height="50" className="d-inline-block align-top"/>{' '}
                            <p className="florum-logo-nav">Florum</p>
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