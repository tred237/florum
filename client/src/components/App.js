import { useState, useContext } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";

import { UserContext } from '../context/User';
import Login from "../pages/Login"
import Signup from "../pages/Signup";
import Home from "../pages/Home"
import AddPlant from "../pages/AddPlant";

export default function App() {
  const { authenticationComplete } = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(true)
  const history = useHistory()

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
            <Route exact path="/home">
              {authenticationComplete ? <Home /> : null}
            </Route>
            <Route exact path="/add-plant">
              {authenticationComplete ? <AddPlant /> : null}
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
        </Switch>
      </div>
  )
}