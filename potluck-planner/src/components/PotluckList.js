import React from "react";
import { connect } from "react-redux";

import Potluck from "./Potluck";
import { Route, Link } from "react-router-dom";

const PotluckList = (props) => {
  const { potlucks } = props;

  return (
    <div>
      {potlucks.map((potluck) => {
        return (
          <div key={potluck.id}>
            <h3 className="paragraph">{potluck.potluckName}</h3>
            <p className="paragraph">Date: {potluck.date}</p>
            <p className="paragraph">Time: {potluck.time}</p>

            <Link className="button" to={`/potlucks/${potluck.id}`}>
              More Information
            </Link>
          </div>
        );
      })}
      <Route path={`/potlucks/:id`}>
        <Potluck />
      </Route>
    </div>
  );
};

const mapStateToProps = (state) => ({
  potlucks: state.potlucks,
});

export default connect(mapStateToProps)(PotluckList);
