import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Login from "../pages/Login"
import Home from "../pages/Home"
import Signup from "../pages/Signup";
import { UserProvider } from "../context/User";

export default function App() {
  // const [user, setUser] = useState(null)
  const [isLogin, setIsLogin] = useState(true)
  const history = useHistory()

  // useEffect(() => {
  //   fetch('/current-user')
  //   .then(r => {
  //     if(r.ok) {
  //       r.json().then(data => setUser(data.username))
  //       history.push("/")
  //     }
  //     else isLogin ? history.push("/login") : history.push("/signup")
  //   })
  // })

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
              {/* <Login setUser={setUser} onLoginTransitionClick={handleLoginTransitionClick} /> */}
              <Login onLoginTransitionClick={handleLoginTransitionClick} />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
          </UserProvider>
        </Switch>
      </div>
  )
}