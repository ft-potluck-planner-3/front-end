import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
// import axios from 'axios';
import { connect } from "react-redux";
import { deletePotluck, toggleComing, toggleBrought } from "../actions";
import DeletePotluckModal from "./DeletePotluckModal";

const Potluck = (props) => {
  const { id } = useParams();

  const { potlucks, showModal } = props;

  const initialPotluck = potlucks.find(
    (potluck) => potluck.id === parseInt(id)
  );
  const [potluck, setPotluck] = useState(initialPotluck);

  const handleDelete = () => {
    props.deletePotluck();
  };

  // const handleDeleteYes = () => {
  //     deletePotluckConfirm(id);
  // axios.delete(`https://potluckplanner3.herokuapp.com/api/potlucks/${id}`)
  //     .then(resp => {
  //         deletePotluck(id);
  //         setShowModal(false);
  //         push('/potlucks');
  //     })
  //     .catch(err => {
  //         console.log('potluck delete error: ', err);
  //     })
  // }

  // const handleDeleteNo = () => {
  //     setShowModal(false);
  // }

  const handleClick = (event) => {
    event.preventDefault();
    setPotluck({
      ...potluck,
      guests: potluck.guests.map((guest) => {
        if (guest.guest === event.target.name) {
          return {
            ...guest,
            isComing: !guest.isComing,
          };
        } else {
          return guest;
        }
      }),
    });
    toggleComing(potluck);
  };

  const handleClickFood = (event) => {
    event.preventDefault();
    setPotluck({
      ...potluck,
      foods: potluck.foods.map((food) => {
        if (food.food === event.target.name) {
          return {
            ...food,
            isBrought: !food.isBrought,
          };
        } else {
          return food;
        }
      }),
    });
    toggleBrought(potluck);
  };

  return (
    <div className="potluck" key={id}>
      <h3 className="potluck__title">{potluck.potluckName}</h3>
      <p className="paragraph potluck__paragraph">Date: {potluck.date}</p>
      <p className="paragraph potluck__paragraph">Time: {potluck.time}</p>
      <p className="paragraph potluck__paragraph">
        Location: {potluck.location}
      </p>
      <p className="paragraph potluck__paragraph">Food List:</p>
      <ul className="potluck__unordered-list">
        {potluck.foods.map((food, index) => (
          <li key={index}>
            {food.food} {food.isBrought ? "Is being brought" : "Is available"}{" "}
            <button 
              className="button potluck__button"
              type="button"
              name={food.food}
              onClick={handleClickFood}>Bring This Food</button>
          </li>
        ))}
      </ul>
      <p className="paragraph potluck__paragraph">Guest List:</p>
      <ul className="potluck__unordered-list">
        {potluck.guests.map((guest, index) => (
          <li key={index}>
            {guest.guest} {guest.isComing ? "Is coming" : "Not coming"}{" "}
            <button
              className="button potluck__button"
              type="button"
              name={guest.guest}
              onClick={handleClick}
            >
              RSVP
            </button>
          </li>
        ))}
      </ul>
      <section>
        <Link
          className="button potluck__button"
          to={`/potlucks/edit/${potluck.id}`}
        >
          Edit Potluck Details
        </Link>
        <span>
          <input
            className="button potluck__button"
            type="button"
            onClick={handleDelete}
            value="Delete this Potluck"
          />
        </span>
        {showModal && <DeletePotluckModal />}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    potlucks: state.potlucks,
    showModal: state.showModal,
  };
};
export default connect(mapStateToProps, { deletePotluck, toggleComing, toggleBrought })(
  Potluck
);
