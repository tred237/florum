import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import florumlogo from "../img/florumlogo.png";

export default function NavBarLoggedOut() {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand>
                        <img alt="" src={florumlogo} width="30" height="30" className="d-inline-block align-top"/>{' '}
                        Florum
                    </Navbar.Brand>
                    <Nav>
                        {isLogin ? <Nav.Link as={Link} to="/signup" onClick={() => setIsLogin(!isLogin)}>Signup</Nav.Link> 
                                 : <Nav.Link as={Link} to="/login" onClick={() => setIsLogin(!isLogin)}>Login</Nav.Link>}
                    </Nav>
                    </Container>
                </Navbar>
        </div>
    )
}