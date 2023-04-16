import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { UserContext } from '../context/User';

export default function NavBarLoggedIn() {
    const { setUser } = useContext(UserContext)
    const history = useHistory()

    const handleLogoutClick = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => {
            if(r.ok) {
                history.push("/login")
                setUser(null)
            } else console.log("Logout unsuccessful")
        })
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Florum</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/add-plant">Add Plant</Nav.Link>
                    <Nav.Link onClick={handleLogoutClick}>Logout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}