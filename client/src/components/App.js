import { useState } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";

import Login from "../pages/Login"
import Home from "../pages/Home"
import Signup from "../pages/Signup";
import { UserProvider } from "../context/User";

export default function App() {
  const [isLogin, setIsLogin] = useState(true)
  const history = useHistory()

  const handleLoginTransitionClick = () => {
    setIsLogin(!isLogin)
    isLogin ? history.push("/signup") : history.push("/login")
  }

  return (
      <div className="App">
        <Switch>
          <UserProvider>
            <Route exact path="/signup">
              <Signup onLoginTransitionClick={handleLoginTransitionClick} />
            </Route>
            <Route exact path="/login">
              <Login onLoginTransitionClick={handleLoginTransitionClick} />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </UserProvider>
        </Switch>
      </div>
  )
}