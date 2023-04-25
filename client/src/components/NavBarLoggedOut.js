import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import florumlogo from "../img/florumlogo.png";
import SignupModal from '../modals/SignUpModal';

export default function NavBarLoggedOut() {
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>
                    <img alt="" src={florumlogo} width="30" height="30" className="d-inline-block align-top"/>{' '}
                    Florum
                </Navbar.Brand>
                <Nav>
                    <Nav.Link onClick={handleShowModal}>Signup</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <SignupModal showModal={showModal} onCloseModal={handleCloseModal} />
        </>
    )
}