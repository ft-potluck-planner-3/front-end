// Library Imports
import React, { useState } from "react";
// import axios from "axios";

const PotluckForm = () => {
  // Initializing Form Data
  const initialFormValues = {
    potluckName: "",
    date: "",
    time: "",
    location: "",
    guests: [],
    foods: [],
  };

  const initialGuests = [{ username: "" }];
  const initialFoods = [{ food: "" }];

  // State Managment
  const [formValues, setFormValues] = useState(initialFormValues);
  const [guestList, setGuestList] = useState(initialGuests);
  const [foodList, setFoodList] = useState(initialFoods);

  // Form Event Handlers
  const handleChanges = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  // ----- Guest List Handlers -----
  const handleGuestInput = (index, event) => {
    const values = [...guestList];
    values[index][event.target.name] = event.target.value;
    setGuestList(values);
  };

  const handleAddGuest = (event) => {
    event.preventDefault();
    setGuestList([...guestList, { username: "" }]);
  };

  const handleRemoveGuest = (event, index) => {
    event.preventDefault();
    const values = [...guestList];
    values.splice(index, 1);
    setGuestList(values);
  };

  const handleSubmitGuest = (event) => {
    event.preventDefault();
    console.log("Guest List", guestList);
  };

  // ----- Food List Handlers -----
  const handleFoodInput = (index, event) => {
    const values = [...foodList];
    values[index][event.target.name] = event.target.value;
    setFoodList(values);
  };

  const handleAddFood = (event) => {
    event.preventDefault();
    setFoodList([...foodList, { food: "" }]);
  };

  const handleRemoveFood = (event, index) => {
    event.preventDefault();
    const values = [...foodList];
    values.splice(index, 1);
    setFoodList(values);
  };

  const handleSubmitFoods = (event) => {
    event.preventDefault();
    console.log("Food List", foodList);
  };

  // Returning Potluck Form

  return (
    <form>
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
                name="username"
                placeholder="Guest's Name"
                value={guest.username}
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
                onClick={(event) => {
                  handleRemoveGuest(event, index);
                }}
              >
                -
              </button>
            </div>
          );
        })}
        <button onClick={handleSubmitGuest}>Submit Guest List</button>
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
                onClick={(event) => {
                  handleRemoveFood(event, index);
                }}
              >
                -
              </button>
            </div>
          );
        })}
        <button onClick={handleSubmitFoods}>Submit Foods List</button>
      </div>
      {/* Submiting Form */}
      <button>Submit Form</button>
    </form>
  );
};

export default PotluckForm;
