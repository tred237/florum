import { useContext, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { UserContext } from '../context/User';
import { PlantsProvider } from "../context/Plants";
import LoginPage from "../pages/LoginPage"
import HomePage from "../pages/HomePage"
import PlantPage from "../pages/PlantPage";
import SeeAllPage from "../pages/SeeAllPage";
import SeeAllUserPlants from "../pages/SeeAllUserPlantsPage";

import NavBarLoggedOut from "./NavBarLoggedOut";
import NavBarLoggedin from "./NavBarLoggedIn";
import Loading from "./Loading";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

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
            <PrivateRoute exact component={SeeAllUserPlants} path="/my-plants" componentProps={{searchedPlants: searchedPlants, category: 'owned_plants'}} />
            <PrivateRoute exact component={SeeAllUserPlants} path="/commented-plants" componentProps={{searchedPlants: searchedPlants, category: 'commented_plants'}} />
            <PrivateRoute exact component={SeeAllPage} path="/climates-aquatic" componentProps={{searchedPlants: searchedPlants, climateType: 'Aquatic'}} />
            <PrivateRoute exact component={SeeAllPage} path="/climates-dry" componentProps={{searchedPlants: searchedPlants, climateType: 'Dry'}} />
            <PrivateRoute exact component={SeeAllPage} path="/climates-continental" componentProps={{searchedPlants: searchedPlants, climateType: 'Continental'}} />
            <PrivateRoute exact component={SeeAllPage} path="/climates-polar" componentProps={{searchedPlants: searchedPlants, climateType: 'Polar'}} />
            <PrivateRoute exact component={SeeAllPage} path="/climates-temperate" componentProps={{searchedPlants: searchedPlants, climateType: 'Temperate'}} />
            <PrivateRoute exact component={SeeAllPage} path="/climates-tropical" componentProps={{searchedPlants: searchedPlants, climateType: 'Tropical'}} />
            <PrivateRoute exact component={SeeAllPage} path="/categories-edible" componentProps={{searchedPlants: searchedPlants, category: 'Edible'}} />
            <PrivateRoute exact component={SeeAllPage} path="/categories-safe-for-pets" componentProps={{searchedPlants: searchedPlants, category: 'Safe For Pets'}} />
            <PrivateRoute exact component={SeeAllPage} path="/categories-blooms" componentProps={{searchedPlants: searchedPlants, category: 'Blooms'}} />
            <PrivateRoute exact component={SeeAllPage} path="/all-plants" componentProps={{searchedPlants: searchedPlants, category: 'All Plants'}} />
            <Route path="/">
              <Redirect to="/home" />
            </Route>
        </Switch>
      </PlantsProvider>
      <section className="footer">
        <p className="footer-text">Florum</p>
      </section>
    </div>
  )
}