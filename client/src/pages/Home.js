import { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'

import PlantCard from "../components/PlantCard"
import { UserContext } from '../context/User';

export default function Home() {
    const { user } = useContext(UserContext);
    const [plants, setPlants] = useState([])

    useEffect(() => {
        fetch("/plants")
        .then(r => {
            if(r.ok) r.json().then(data => setPlants(data))
        })
    }, [])

    if(!user) return <Redirect push to="/login" />
    else {
        return(
            <div>
                <h1>{`Welcome ${user.username}!`}</h1>
                <ListGroup> 
                    {plants ? plants.map((plant) => <PlantCard key={plant.id} plant={plant} />) : null}
                </ListGroup>
            </div>
        )
    }
}
