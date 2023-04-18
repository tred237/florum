import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PlantPage() {
    const [plant, setPlant] = useState([])
    const plantId = useParams()

    useEffect(() => {
        fetch(`/plants/${plantId.id}`)
        .then(r => {
            if(r.ok) r.json().then(data => setPlant(data))
        })
    },[])

    console.log(plant)

    return (
        <h1>{plant.name}</h1>
    )
}