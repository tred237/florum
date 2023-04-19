import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";
import PlantDetails from "../components/PlantDetails";

export default function PlantPage() {
    const [plant, setPlant] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
    const plantId = useParams()

    useEffect(() => {
        fetch(`/plants/${plantId.id}`)
        .then(r => {
            if(r.ok) r.json().then(data => setPlant(data))
            else r.json().then(err => setErrorMessage(err.error))
        })
    },[plantId])

    return (
        <Container>
            <h1>{errorMessage ? errorMessage  : <PlantDetails plant={plant} setPlant={setPlant} />}</h1>
        </Container>
    )
}