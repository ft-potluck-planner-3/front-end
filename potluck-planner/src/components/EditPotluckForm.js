import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function EditPotluckForm(props) {
    const { push } = useHistory();
    const { id } = useParams();
    const [potluck, setPotluck] = useState({
        potluckName: "",
        date: "",
        time: "",
        location: "",
        guests: [],
        foods: []
    });

    useEffect(() => {
        axios.get(`https://potluckplanner3.herokuapp.com/api/potlucks/${id}`)
            .then(resp => {
                setPotluck(resp.data);
            })
            .catch(err => {
                console.log('edit form get error: ', err);
            })
    }, [])

    const handleChange = e => {
        setPotluck({
            ...potluck,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`https://potluckplanner3.herokuapp.com/api/potlucks/${id}`, potluck)
            .then(resp => {
                props.setPotlucks(resp.data);
                push(`/potlucks/${id}`);
            })
            .catch(err => {
                console.log('edit form submit error: ', err);
            })
    }

    const { potluckName, date, time, location, guests, foods } = potluck;

    return (
        <div>
            <h3>Placeholder for form, copy from PotluckForm when ready</h3>
            <div>
                <input type="submit" value="Save"/>
                <Link to={'/potlucks'}><input type="button" value="Cancel"/></Link>
            </div>
        </div>
    )
}

export default EditPotluckForm;
