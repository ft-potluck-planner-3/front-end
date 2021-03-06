import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import potlucksReducer from './reducers';

const store = createStore(potlucksReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
