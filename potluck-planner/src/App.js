// Component Imports
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import PotluckForm from "./components/PotluckForm";
import PotluckList from "./components/PotluckList";
import SignUp from "./components/SignUp";
import Potluck from "./components/Potluck";
import Logout from "./components/Logout";

import PrivateRoute from './components/PrivateRoute';



// Library Imports
import { NavLink, Route, Switch } from "react-router-dom";

function App() {

  const isLoggedIn = localStorage.getItem("token");

  return (
    <div className="App">
      <nav>
        <h1>Potluck Planner</h1>
        <div className="nav-links">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign-up</NavLink>
          {isLoggedIn && <NavLink to="/potlucks">View Potlucks</NavLink>}
          {isLoggedIn && <NavLink to="/create">Create Potlucks</NavLink>}
          {isLoggedIn && <NavLink to="/logout">Logout</NavLink>}
        </div>
      </nav>
      <Switch>
        <Route path="/logout">
          <Logout />
        </Route>
        
        <PrivateRoute path="/potlucks/:id" component={Potluck} />

        <PrivateRoute path="/create" component={PotluckForm} />

        <PrivateRoute path="/potlucks" component={PotluckList} />
        
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
