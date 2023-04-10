import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Login from "../pages/Login"
import Home from "../pages/Home"
import Signup from "../pages/Signup";

export default function App() {
  const [user, setUser] = useState(null)
  const [plants, setPlants] = useState([])
  const [isLogin, setIsLogin] = useState(true)
  const history = useHistory()

  useEffect(() => {
    fetch('/current-user')
    .then(r => {
      r.ok ? history.push("/") : history.push("/login") 
    })
  })

  // useEffect(() => {
  //   fetch("/plants")
  //     .then(r => {
  //       if(r.ok) r.json().then(data => setPlants(data))
  //     })
  // }, [])

  const handleLoginTransitionClick = () => {
    setIsLogin(!isLogin)
    isLogin ? history.push("/signup") : history.push("/login")
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