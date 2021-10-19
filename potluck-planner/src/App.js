// Component Imports
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import PotluckForm from "./components/PotluckForm";
import PotluckList from "./components/PotluckList";
import SignUp from "./components/SignUp";
import Potluck from "./components/Potluck";
import Logout from "./components/Logout";

// Library Imports
import { NavLink, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Potluck Planner</h1>
        <div className="nav-links">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign-up</NavLink>
          <NavLink to="/potlucks">View Potlucks</NavLink>
          <NavLink to="/create">Create Potlucks</NavLink>
          <NavLink to="/logout">Logout</NavLink>
        </div>
      </nav>
      <Switch>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/potlucks/:id">
          <Potluck />
        </Route>
        <Route path="/create">
          <PotluckForm />
        </Route>
        <Route path="/potlucks">
          <PotluckList />
        </Route>
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
