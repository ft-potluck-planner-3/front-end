import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
// Schema Import
import loginSchema from "../schemas/loginSchema";

const initialValues = {
  username: "",
  password: "",
};

const initialError = "";

function Login(props) {
  const [credentials, setCredentials] = useState(initialValues);
  const [error, setError] = useState(initialError);
  const [disableLogin, setDisableLogin] = useState(true);
  const [loginErrors, setLoginErrors] = useState(initialValues);

  const { push } = useHistory();

  const validate = (name, value) => {
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(() => setLoginErrors({ ...loginErrors, [name]: "" }))
      .catch((error) =>
        setLoginErrors({ ...loginErrors, [name]: error.errors[0] })
      );
  };

  const handleChanges = (e) => {
    validate(e.target.name, e.target.value);
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // Disable/Enable login button if login is or isn't valid
  useEffect(() => {
    loginSchema.isValid(credentials).then((valid) => setDisableLogin(!valid));
  }, [credentials]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://potluckplanner3.herokuapp.com/api/users/login",
        credentials
      )
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
        push("/potlucks");
      })
      .catch((err) => {
        console.log("login error:", err);
        setError(err);
      });
  };

  return (
    <div>
      <h2 className='loginHeader'>Please enter your login information.</h2>
      <div>
        <p>{loginErrors.username}</p>
        <p>{loginErrors.password}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={handleChanges}
            value={credentials.username}
          />
        </label>
        <label className>
          Password:
          <input
            type="password"
            name="password"
            onChange={handleChanges}
            value={credentials.password}
          />
        </label>
        <button disabled={disableLogin}>Log in</button>
      </form>
      {error && (
        <p>
          Please input a valid username and password or sign up if you have not
          signed up.
        </p>
      )}
    </div>
  );
}

export default Login;
