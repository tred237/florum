import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login"
import Home from "../pages/Home"
import Signup from "../pages/Signup";

export default function App() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("/plants")
      .then(r => {
        if(r.ok) r.json().then(data => setPlants(data))
      })
  }, [])

  console.log(plants)

  return (
      <div className="App">
        <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home plants={plants}/>
          </Route>
        </Switch>
      </div>
  )
}