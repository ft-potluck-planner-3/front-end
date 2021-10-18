import React, { useState } from 'react';

const initialValues = {
    name: '',
    username: '',
    password: ''
}
const initialError = '';

const SignUp = (props) => {
    

const [credentials, setCredentials] = useState(initialValues);

const [error, setError] = useState(initialError);

const handleChanges = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
}

    return (
        <section className="loginSection">
            <button className="homeButton">Home</button>
                <div className="loginContainer">

                    <form className="loginForm">
                <label> Name
                        <input 
                        type="loginInput" 
                        name="name"
                        placeholder="Name"
                        onChange={handleChanges}
                        value={credentials.name}
                        />
                </label>
                        
                <label>Username
                        <input
                        type="text"
                        name="username"
                        placeholder="Username"
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
                <label>Guest

                <input 
                type="radio"
                name="userType"
                value="guest"
                onChange={handleChanges}
                checked={credentials.userType === 'guest'}
                />
                </label>
                <label>Organizer
                <input
                type="radio"
                name="userType"
                value="organizer"
                onChange={handleChanges}
                checked={credentials.userType === 'organizer'}
                />
                </label>

                    </form>
                </div>


        </section>

    )}

export default SignUp
