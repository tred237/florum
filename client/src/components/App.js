import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { UserContext } from '../context/User';
import { PlantProvider } from "../context/Plant";
import LoginPage from "../pages/LoginPage"
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage"
import NavBarLoggedOut from "./NavBarLoggedOut";
import NavBarLoggedin from "./NavBarLoggedIn";
import PlantPage from "../pages/PlantPage";

export default function App() {
  const { authenticationComplete, user } = useContext(UserContext);

  return (
      <div className="App">
        <PlantProvider>
        {user ? <NavBarLoggedin /> : <NavBarLoggedOut />}
        <Switch>
            <Route exact path="/signup">
              <SignupPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/home">
              {authenticationComplete ? <HomePage/> : null}
            </Route>
            <Route exact path="/plant/:id">
              {authenticationComplete ? <PlantPage/> : null}
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
        </Switch>
        </PlantProvider>
      </div>
  )
}