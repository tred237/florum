import React, { createContext, useState, useEffect, useContext } from "react";

import { UserContext } from './User';

export const PlantsContext = createContext()

export function PlantsProvider({ children }) {
    const { user } = useContext(UserContext)
    const [plants, setPlants] = useState([])

    useEffect(() => {
        if(user) {
            fetch("/plants")
            .then(r => {
                if(r.ok) r.json().then(data => setPlants(data))
            })
        }
    }, [user])

    console.log("plants")
    console.log(plants)

    return (
        <PlantsContext.Provider value={{ plants, setPlants }}>
            {children}
        </PlantsContext.Provider>
    )
}