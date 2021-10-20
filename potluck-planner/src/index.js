import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(reducer. applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
