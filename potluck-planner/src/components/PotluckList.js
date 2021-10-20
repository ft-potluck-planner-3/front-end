import React from "react";
import { connect } from 'react-redux';

import Potluck from "./Potluck";
import { Route, Link } from 'react-router-dom'

const PotluckList = (props) => {
  const { potlucks } = props;
  
  return (<div>
    
    {potlucks.map(potluck =>{
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

const mapStateToProps = state => ({
  potlucks: state.potlucks
})

export default connect(mapStateToProps)(PotluckList);
