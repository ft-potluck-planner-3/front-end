import React, { useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

function Logout(props) {
    
    useEffect(() => {
        axiosWithAuth()
            .post('https:potluckplanner3.herokuapp.com/api/users/logout')
            .then(resp => {
                localStorage.removeItem("token");
                props.history.push('/login');
            })
            .catch(err => {
                console.log('logout error', err)
            })
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default Logout
