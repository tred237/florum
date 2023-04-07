import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login"
import Home from "../pages/Home"

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  console.log(plants)

  return (
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home plants={plants}/>
          </Route>
        </Switch>
      </div>
  );
}

export default App;