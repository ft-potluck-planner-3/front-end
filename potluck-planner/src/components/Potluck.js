import React from "react";
import { useParams } from "react-router-dom";

const fakePotlucks = [{
    id: 1, 
    potluckName: 'Neighborhood Potluck 0',
    date: '10/18',
    time: '5pm',
    location: 'The cul de sac',
    foods: ['item 1', 'item 2'],
    guests: ['guest 1', 'guest 2'] 
  },
  {
    id: 2, 
    potluckName: 'Neighborhood Potluck 2',
    date: '10/18',
    time: '5pm',
    location: '123',
    foods: ['item 1', 'item 2'],
    guests: ['guest 1', 'guest 2'] 
  },
  {
    id: 3, 
    potluckName: 'Neighborhood Potluck 3',
    date: '10/18',
    time: '5pm',
    location: '345',
    foods: ['item 1', 'item 2'],
    guests: ['guest 1', 'guest 2'] 
  }
  ]

const Potluck = (props) => {
    const {id} = useParams();
    
    const potluck = fakePotlucks.find(potluck => potluck.id === parseInt(id))

    return <div className="potluck" key={id}>
        <h3>{potluck.potluckName}</h3>
        <p>Date: {potluck.date}</p>
        <p>Time: {potluck.time}</p>
        <p>Location: {potluck.location}</p>
        <p>Food List:</p>
        <ul>{potluck.foods.map((food, index) => <li key={index}>{food} <button>Bring This Food</button></li>)}</ul>
        <p>Guest List:</p>
        <ul>{potluck.guests.map((guest, index) => <li key={index}>{guest} <button>RSVP</button></li>)}</ul>
        <button>Edit Potluck Details</button>
        <button>Delete this Potluck</button>
    </div>;
};
export default Potluck;
