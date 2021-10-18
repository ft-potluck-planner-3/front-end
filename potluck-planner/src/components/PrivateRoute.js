import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//Private Route
//1. Have the same functionality as Route.
//2. It renders the same component if we are logged in with the same props.
//3. Redirect to login if not logged in.

function PrivateRoute({component:Component, ...rest}) {
    return <Route {...rest} render={(props) => {
        if (localStorage.getItem("token")) {
            return <Component {...props}/>;
        } else {
            return <Redirect to='/login'/>;
        }
    }}/>
}

export default PrivateRoute;
