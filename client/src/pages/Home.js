import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
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

    const handleClick = () => {
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

    // console.log(user)

    return(
        <div>
            <h1>{`Welcome ${user ? user.username : null}!`}</h1>
            <Button onClick={handleClick}>Logout</Button>
            <ListGroup> 
                {plants ? plants.map((plant) => <PlantCard key={plant.id} plant={plant} />) : null}
            </ListGroup>
        </div>
    )
}
