import React from "react";
import { useParams } from "react-router-dom";

const Potluck = (props) => {
    console.log(props)
    const {potlucks} = props;
    
    const {id} = useParams();
    console.log(potlucks)
    const potluck = potlucks.find(potluck => potluck.id === parseInt(id))

    return <div className="potluck" key={id}>
        <h3>{potluck.potluckName}</h3>
        <p>Date: {potluck.date}</p>
        <p>Time: {potluck.time}</p>
        <p>Location: {potluck.location}</p>
        <p>Food List:</p>
        <ul>{potluck.foods.map(food => <li>{food}</li>)}</ul>
        <p>Guest List:</p>
        <ul>{potluck.guests.map(guest => <li>{guest}</li>)}</ul>
        <button>Edit Potluck Details</button>
        <button>Delete this Potluck</button>
    </div>;
};
export default Potluck;
