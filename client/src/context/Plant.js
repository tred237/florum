import React, { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const PlantContext = createContext()

export function PlantProvider({ children }) {
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
        <PlantContext.Provider value={{ plant, setPlant, errorMessage }}>
            {children}
        </PlantContext.Provider>
    )
}
