import { useState, useEffect, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';

import PlantCard from "../components/PlantCard"
import { UserContext } from '../context/User';

export default function Home() {
    const { user, setUser } = useContext(UserContext);
    const [plants, setPlants] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetch("/plants")
        .then(r => {
            if(r.ok) r.json().then(data => setPlants(data))
        })
    }, [])

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

    // if(authenticationComplete && !user) return <Redirect push to="/login" />
    if(!user) return <Redirect push to="/login" />
    else {
        return(
            <div>
                <h1>{`Welcome ${user.username}!`}</h1>
                <Button onClick={handleLogoutClick}>Logout</Button>
                <ListGroup> 
                    {plants ? plants.map((plant) => <PlantCard key={plant.id} plant={plant} />) : null}
                </ListGroup>
            </div>
        )
    }
}
