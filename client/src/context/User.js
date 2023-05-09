import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [authenticationComplete, setAuthenticationComplete] = useState(false)

    useEffect(() => {
        fetch('/current-user')
        .then(r => {
            if(r.ok) {
                r.json().then(user => {
                    setUser(user)
                    setAuthenticationComplete(true)
                })
            }
            else setAuthenticationComplete(true)
        })
    },[])

    return (
        <UserContext.Provider value={{ authenticationComplete, user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}