// Library Imports
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { addPotluck } from "../actions";
// import axios from "axios";

// Component Imports
import potluckFormSchema from "../schemas/potluckFormSchema";

const PotluckForm = (props) => {
  const { push } = useHistory();
  // Initializing Form Data
  const initialFormValues = {
    potluckName: "",
    date: "",
    time: "",
    location: "",
  };

  const initialGuests = [{ guest: "", isComing: "" }];
  const initialFoods = [{ food: "", isBrought: "" }];

  const initialPlannedPotluck = {
    id: "",
    potluckName: "",
    date: "",
    time: "",
    location: "",
    guests: initialGuests,
    foods: initialFoods,
  };

  // State Managment
  const [formValues, setFormValues] = useState(initialFormValues);
  const [guestList, setGuestList] = useState(initialGuests);
  const [foodList, setFoodList] = useState(initialFoods);
  const [formErrors, setFormErrors] = useState(initialFormValues);
  const { potlucks } = props;
  // plannedPotluck holds all the potluck data on when the form is submitted
  const [plannedPotluck, setPlannedPotluck] = useState(initialPlannedPotluck);
  // Disable Remove Guest Button if guestList has only 1 item
  const [disableFormSubmit, setDisableFormSubmit] = useState(true);
  const [disableRemoveGuest, setDisableRemoveGuest] = useState(true);
  const [disableRemoveFood, setDisableRemoveFood] = useState(true);

  // ----- Disable / Enable Remove Buttons -----

  // Guest Remove Button
  useEffect(() => {
    if (guestList.length < 2) {
      setDisableRemoveGuest(true);
    } else {
      setDisableRemoveGuest(false);
    }
  }, [guestList]);

  // Food Remove Button
  useEffect(() => {
    if (foodList.length < 2) {
      setDisableRemoveFood(true);
    } else {
      setDisableRemoveFood(false);
    }
  }, [foodList]);

  useEffect(() => {
    potluckFormSchema
      .isValid(formValues)
      .then((valid) => setDisableFormSubmit(!valid));
  }, [formValues]);

  // ----- Form Event Handlers -----
  const validate = (name, value) => {
    yup
      .reach(potluckFormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((error) =>
        setFormErrors({ ...formErrors, [name]: error.errors[0] })
      );
  };

  const handleChanges = (event) => {
    validate(event.target.name, event.target.value);
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // Store plannedPotluck into state
    props.addPotluck(plannedPotluck);
    // Resetting form values
    setFormValues(initialFormValues);
    setGuestList(initialGuests);
    setFoodList(initialFoods);
    push("/potlucks");
  };

  useEffect(() => {
    const newPlannedPotluck = {
      id: potlucks.length + 1,
      potluckName: formValues.potluckName,
      date: formValues.date,
      time: formValues.time,
      location: formValues.location,
      guests: guestList,
      foods: foodList,
    };
    setPlannedPotluck(newPlannedPotluck);
  }, [formValues, guestList, foodList]);

  // ----- Guest List Handlers -----

  const handleGuestInput = (index, event) => {
    const values = [...guestList];
    values[index][event.target.name] = event.target.value;
    setGuestList(values);
  };

  const handleAddGuest = (event) => {
    event.preventDefault();
    setGuestList([...guestList, initialGuests]);
  };

  const handleRemoveGuest = (event, index) => {
    event.preventDefault();
    const values = [...guestList];
    values.splice(index, 1);
    setGuestList(values);
  };

  // ----- Food List Handlers -----

  const handleFoodInput = (index, event) => {
    const values = [...foodList];
    values[index][event.target.name] = event.target.value;
    setFoodList(values);
  };

  const handleAddFood = (event) => {
    event.preventDefault();
    setFoodList([...foodList, initialFoods]);
  };

  const handleRemoveFood = (event, index) => {
    event.preventDefault();
    const values = [...foodList];
    values.splice(index, 1);
    setFoodList(values);
  };

  // ----- Returning Potluck Form -----

  return (
    <form>
      {/* Validation Errors */}
      <div>
        <p>{formErrors.potluckName}</p>
        <p>{formErrors.date}</p>
        <p>{formErrors.time}</p>
        <p>{formErrors.location}</p>
      </div>
      {/* Potluck Inputs */}
      <label>
        Potluck Name:
        <input
          type="text"
          name="potluckName"
          value={formValues.potluckName}
          onChange={handleChanges}
        />
      </label>
      <label>
        Date:
        <input
          type="text"
          name="date"
          value={formValues.date}
          onChange={handleChanges}
        />
      </label>
      <label>
        Time:
        <input
          type="text"
          name="time"
          value={formValues.time}
          onChange={handleChanges}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={formValues.location}
          onChange={handleChanges}
        />
      </label>
      {/* ----- Guest List Inputs ----- */}
      <form>
        <label>
          Add Guests:
          {guestList.map((guest, index) => {
            return (
              <div key={index}>
                <input
                  type="text"
                  name="guest"
                  placeholder="Guest's Name"
                  value={guest.guest}
                  onChange={(event) => handleGuestInput(index, event)}
                />
                <button
                  onClick={(event) => {
                    handleAddGuest(event);
                  }}
                >
                  +
                </button>
                <button
                  disabled={disableRemoveGuest}
                  onClick={(event) => {
                    handleRemoveGuest(event, index);
                  }}
                >
                  -
                </button>
              </div>
            );
          })}
        </label>
      </form>
      {/* ----- Food List Inputs ----- */}
      <form>
        <label>
          Add Foods:
          {foodList.map((food, index) => {
            return (
              <div key={index}>
                <input
                  type="text"
                  name="food"
                  placeholder="Food"
                  value={food.food}
                  onChange={(event) => handleFoodInput(index, event)}
                />
                <button
                  onClick={(event) => {
                    handleAddFood(event);
                  }}
                >
                  +
                </button>
                <button
                  disabled={disableRemoveFood}
                  onClick={(event) => {
                    handleRemoveFood(event, index);
                  }}
                >
                  -
                </button>
              </div>
            );
          })}
        </label>
      </form>
      {/* Submiting Form */}
      <button onClick={handleSubmitForm} disabled={disableFormSubmit}>
        Submit Potluck Form
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    potlucks: state.potlucks,
  };
};

export default connect(mapStateToProps, { addPotluck })(PotluckForm);
