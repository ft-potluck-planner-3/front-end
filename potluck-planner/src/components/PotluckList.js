import React from "react";


import Potluck from "./Potluck";
import { Route, Link } from 'react-router-dom'


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

const PotluckList = () => {


  return (<div>
    
    {fakePotlucks.map(potluck =>{
      return (
      <div key={potluck.id}> 
      <h3>{potluck.potluckName}</h3>
      <p>Date: {potluck.date}</p>
      <p>Time: {potluck.time}</p>

      <Link to={`/potlucks/${potluck.id}`}>More Information</Link>
      </div>)
      
    })}
    <Route path={`/potlucks/:id`}>
    <Potluck />
    </Route>
  </div>
  )};
export default PotluckList;
