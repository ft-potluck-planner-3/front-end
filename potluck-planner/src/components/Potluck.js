import React from "react";

const fakePotluck = { 
    id: 1, 
    potluckName: 'Neighborhood Potluck',
    date: '10/18',
    time: '5pm',
    location: 'The cul de sac',
    foods: ['item 1', 'item 2'],
    guests: ['guest 1', 'guest 2'] 
}
const Potluck = () => {
    const { id, potluckName, date, time, location, foods, guests } = fakePotluck;
    return <div className="potluck" key={id}>
        <h3>{potluckName}</h3>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <p>Location: {location}</p>
        <p>Food List:</p>
        <ul>{foods.map(food => <li>{food}</li>)}</ul>
        <p>Guest List:</p>
        <ul>{guests.map(guest => <li>{guest}</li>)}</ul>
        <button>Edit Potluck Details</button>
        <button>Delete this Potluck</button>
    </div>;
};
export default Potluck;
