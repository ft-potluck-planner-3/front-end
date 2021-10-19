import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

const initialValues = {
    username: '',
    password: '',
    role: ''
}
const initialError = '';

const SignUp = (props) => {
    
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
        
        axios.post("https://potluckplanner3.herokuapp.com/api/users/register", credentials)
            .then(resp => {
                setCredentials(initialValues);
                push('/login');
            })
            .catch(err => {
                console.log('signup error: ', err);
            })
    }

    return (
        <section className="loginSection">
            <div className="loginContainer">
                <form onSubmit={handleSubmit} className="loginForm">
                    <label>Username
                            <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={handleChanges}
                            value={credentials.username}
                            />
                    </label>
                    <label>Password
                        <input
                            type="password"
                            name="password"
                            onChange={handleChanges}
                            value={credentials.password}
                        />
                    </label>
                    <label>Guest
                    <input 
                    type="radio"
                    name="role"
                    value="guest"
                    onChange={handleChanges}
                    checked={credentials.role === 'guest'}
                    />
                    </label>
                    <label>Organizer
                    <input
                    type="radio"
                    name="role"
                    value="organizer"
                    onChange={handleChanges}
                    checked={credentials.role === 'organizer'}
                    />
                    </label>
                    <button>Submit Signup Info</button>
                </form>
            </div>


        </section>

    )}

export default SignUp
