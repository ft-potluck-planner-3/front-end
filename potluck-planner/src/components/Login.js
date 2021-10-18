import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialValues = {
    username: '',
    password: ''
}

const initialError = '';

function Login() {
    const [credentials, setCredentials] = useState(initialValues);
    const [error, setError] = useState(initialError);

    const { push } = useHistory();

    const handleChanges = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", credentials)
            .then(resp => {
                localStorage.setItem("token", resp.data.token);
                push('/create')
            })
            .catch(err => {
                console.log('login error:', err);
                setError(err);
            })
    }

    return (
        <div>
            <h2>Please enter your login information.</h2>
            <form onSubmit={handleSubmit} >
                <label>username
                    <input
                        type="text"
                        name="username"
                        onChange={handleChanges}
                        value={credentials.username}
                    />
                </label>
                <label>password
                    <input
                        type="password"
                        name="password"
                        onChange={handleChanges}
                        value={credentials.password}
                    />
                </label>
                <button>Log in</button>
            </form>
            { error && <p>Please input a valid username and password or sign up if you have not signed up.</p>}
        </div>
    )
}

export default Login
