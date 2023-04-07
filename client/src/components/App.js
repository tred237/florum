import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Login from "../pages/Login"
import Home from "../pages/Home"
import Signup from "../pages/Signup";

export default function App() {
  const [plants, setPlants] = useState([])
  const [isLogin, setIsLogin] = useState(true)
  const loginPageHistory = useHistory()

  useEffect(() => {
    fetch("/plants")
      .then(r => {
        if(r.ok) r.json().then(data => setPlants(data))
      })
  }, [])

  const handleLoginTransitionClick = () => {
    setIsLogin(!isLogin)
    isLogin ? loginPageHistory.push("/signup") : loginPageHistory.push("/login")
  }

  return (
      <div className="App">
        <Switch>
          <Route exact path="/signup">
            <Signup onLoginTransitionClick={handleLoginTransitionClick} />
          </Route>
          <Route exact path="/login">
            <Login onLoginTransitionClick={handleLoginTransitionClick} />
          </Route>
          <Route exact path="/">
            <Home plants={plants}/>
          </Route>
        </Switch>
      </div>
  )
}