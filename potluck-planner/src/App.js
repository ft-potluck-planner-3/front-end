// Component Imports
import HomePage from "./components/HomePage";
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
        </div>
      </nav>
      <HomePage />
    </div>
  );
}

export default App;
