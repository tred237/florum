import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch('/current-user')
        .then(r => {
          if(r.ok) r.json().then(user => setUser(user))
        })
    },[])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}