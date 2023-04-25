import { useContext, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { UserContext } from '../context/User';
import { PlantsProvider } from "../context/Plants";
import LoginPage from "../pages/LoginPage"
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
  const [searchedPlants, setSearchedPlants] = useState('')

  const handleSearchChange = (e) => setSearchedPlants(e.target.value)

  if(!authenticationComplete) <Loading />
  else return (
    <div className="App">
      <PlantsProvider>
        {user ? <NavBarLoggedin searchedPlants={searchedPlants} onSearchChange={handleSearchChange} /> : <NavBarLoggedOut />}
        <Switch>
            <PublicRoute exact component={LoginPage} path="/login" />
            <PrivateRoute exact component={HomePage} path="/home" componentProps={{searchedPlants: searchedPlants}} />
            <PrivateRoute exact component={PlantPage} path="/plants/:id" />
            <PrivateRoute exact component={MyPlants} path="/my-plants" componentProps={{searchedPlants: searchedPlants}} />
            <Route path="/">
              <Redirect to="/home" />
            </Route>
        </Switch>
      </PlantsProvider>
    </div>
  )
}