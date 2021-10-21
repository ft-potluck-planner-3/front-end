// Component Imports
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import PotluckForm from "./components/PotluckForm";
import PotluckList from "./components/PotluckList";
import SignUp from "./components/SignUp";
import Potluck from "./components/Potluck";
import Logout from "./components/Logout";
import EditPotluckForm from "./components/EditPotluckForm";
import PrivateRoute from "./components/PrivateRoute";
// Logo Image Import
import logo from "./images/logo.png";

// Library Imports
import { NavLink, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <div className="App">
      <nav className="nav-bar">
        <div className="nav-bar__logo-container">
          <NavLink className="nav-bar__logo-link" to="/">
            <img
              className="nav-bar__logo"
              src={logo}
              alt="potluck planner logo"
            />
          </NavLink>
        </div>
        <div className="nav-bar__link-container">
          <NavLink className="nav-bar__link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-bar__link" to="/signup">
            Sign-up
          </NavLink>
          {isLoggedIn && (
            <NavLink className="nav-bar__link" to="/potlucks">
              View Potlucks
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink className="nav-bar__link" to="/create">
              Create Potlucks
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink className="nav-bar__link" to="/logout">
              Logout
            </NavLink>
          )}
        </div>
      </nav>
      <Switch>
        <Route path="/logout">
          <Logout />
        </Route>

        <PrivateRoute path="/potlucks/edit/:id" component={EditPotluckForm} />

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
      <Footer />
    </div>
  );
}

export default App;
