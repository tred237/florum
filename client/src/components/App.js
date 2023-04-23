import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { UserContext } from '../context/User';
import { PlantsProvider } from "../context/Plants";
import LoginPage from "../pages/LoginPage"
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage"
import NavBarLoggedOut from "./NavBarLoggedOut";
import NavBarLoggedin from "./NavBarLoggedIn";
import PlantPage from "../pages/PlantPage";
import Loading from "./Loading";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import MyPlants from "../pages/MyPlantsPage";

export default function App() {
  const { authenticationComplete, user } = useContext(UserContext);

  if(!authenticationComplete) <Loading />
  else return (
    <div className="App">
      <PlantsProvider>
      {user ? <NavBarLoggedin /> : <NavBarLoggedOut />}
      <Switch>
          <PublicRoute exact component={LoginPage} path="/login" />
          <PublicRoute exact component={SignupPage} path="/signup" />
          <PrivateRoute exact component={HomePage} path="/home" />
          <PrivateRoute exact component={PlantPage} path="/plants/:id" />
          <PrivateRoute exact component={MyPlants} path="/my-plants" />
          <Route path="/">
            <Redirect to="/home" />
          </Route>
      </Switch>
      </PlantsProvider>
    </div>
  )
}