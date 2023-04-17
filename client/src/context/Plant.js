import React, { createContext, useState, useEffect, useContext } from "react";

import { UserContext } from './User';

export const PlantContext = createContext()

export function PlantProvider({ children }) {
    const { user } = useContext(UserContext)
    const [plants, setPlants] = useState([])

    useEffect(() => {
        if(user) {
            fetch("/plants")
            .then(r => {
                if(r.ok) r.json().then(data => setPlants(data))
            })
        }
    }, [])

    console.log(plants)

    return (
        <PlantContext.Provider value={{ plants, setPlants }}>
            {children}
        </PlantContext.Provider>
    )
}