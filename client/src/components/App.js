import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { UserContext } from '../context/User';
import { PlantProvider } from "../context/Plant";
import Login from "../pages/Login"
import Signup from "../pages/Signup";
import Home from "../pages/Home"
import NavBarLoggedOut from "./NavBarLoggedOut";
import NavBarLoggedin from "./NavBarLoggedIn";

export default function App() {
  const { authenticationComplete, user } = useContext(UserContext);

  return (
      <div className="App">
        <PlantProvider>
        {user ? <NavBarLoggedin /> : <NavBarLoggedOut />}
        <Switch>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/home">
              {authenticationComplete ? <Home /> : null}
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
        </Switch>
        </PlantProvider>
      </div>
  )
}