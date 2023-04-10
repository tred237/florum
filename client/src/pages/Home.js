// import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';

import PlantCard from "../components/PlantCard"

function Home({ plants, user }) {
    const history = useHistory()

    // useEffect(() => {
    //     fetch("/plants")
    //     .then(r => {
    //         if(r.ok) r.json().then(data => setPlants(data))
    //     })
    // }, [])

    const handleClick = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => {
            if(r.ok) history.push("/login")
        })
    }

    return(
        <div>
            <h1>{`Welcome ${user}!`}</h1>
            <Button onClick={handleClick}>Logout</Button>
            <ListGroup> 
                {plants.map((plant) => <PlantCard key={plant.id} plant={plant} />)}
            </ListGroup>
        </div>
    )
}

export default Home