import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import potluckFormSchema from "../schemas/potluckFormSchema"; 

function EditPotluckForm(props) {
    const { push } = useHistory();
	const { id } = useParams();
    const { potlucks } = props;
    const initialFormValues = {
        potluckName: "",
        date: "",
        time: "",
        location: "",
      };
    
      const initialPlannedPotluck = {
        potluckName: "",
        date: "",
        time: "",
        location: "",
        guests: [""],
        foods: [""],
      };
    
      const initialGuests = [""];
      const initialFoods = [""];
    
      // State Management
      const [formValues, setFormValues] = useState(initialFormValues);
      const [guestList, setGuestList] = useState(initialGuests);
      const [foodList, setFoodList] = useState(initialFoods);
      const [formErrors, setFormErrors] = useState(initialFormValues);
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
 
      //  Trying to make the edit form show the potluck details in the form values

      const potluck = potlucks.find(potluck => potluck.id === parseInt(id));
      // setFormValues({...formValues, potluckName:potluck.potluckName, date:potluck.date, time:potluck.time, location:potluck.location});
    //   setGuestList(potluck.guests);
    //   setFoodList(potluck.foods);

      const handleChanges = (event) => {
        validate(event.target.name, event.target.value);
        setFormValues({
          ...formValues,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmitForm = (event) => {
        event.preventDefault();
        // Store plannedPotluck into a new state
        // setPotlucks((potlucks) => {
        //   const updated = [...potlucks, plannedPotluck];
        //   console.log(updated);
        //   return updated;
        // });
        // Reseting form values
        setFormValues(initialFormValues);
        setGuestList(initialGuests);
        setFoodList(initialFoods);
      };
    
      useEffect(() => {
        const newPlannedPotluck = {
          potluckName: formValues.potluckName,
          date: formValues.date,
          time: formValues.time,
          location: formValues.location,
          guests: [guestList],
          foods: [foodList],
        };
        setPlannedPotluck(newPlannedPotluck);
      }, [formValues, guestList, foodList]);
    
      // ----- Guest List Handlers -----
    
      const handleGuestInput = (index, event) => {
        const values = [...guestList];
        values[index] = event.target.value;
        setGuestList(values);
      };
    
      const handleAddGuest = (event) => {
        event.preventDefault();
        setGuestList([...guestList, ""]);
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
        values[index] = event.target.value;
        setFoodList(values);
      };
    
      const handleAddFood = (event) => {
        event.preventDefault();
        setFoodList([...foodList, ""]);
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
          <div>
            <label>Add Guests:</label>
            {guestList.map((guest, index) => {
              return (
                <div key={index}>
                  <input
                    type="text"
                    name="guest"
                    placeholder="Guest's Name"
                    value={guest}
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
          </div>
          {/* ----- Food List Inputs ----- */}
          <div>
            <label>Add Foods:</label>
            {foodList.map((food, index) => {
              return (
                <div key={index}>
                  <input
                    type="text"
                    name="food"
                    placeholder="Food"
                    value={food}
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
          </div>
          {/* Submiting Form */}
          <button onClick={handleSubmitForm} disabled={disableFormSubmit}>
            Save Potluck Changes
          </button>
        </form>
      );
    };

const mapStateToProps = state => ({
        potlucks: state.potlucks
});

export default connect(mapStateToProps)(EditPotluckForm);
