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

  // State Managment
  const [formValues, setFormValues] = useState(initialFormValues);
  const [guestList, setGuestList] = useState(initialGuests);
  // const [foodItems, setFoodItems] = useState([]);

  // Event Handlers
  const handleChanges = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  // Fix Sumbit Guest Handler Tuesday \/\/\/

  // const handleSubmitGuest = (event) => {
  //   event.preventDefault();

  //   setGuest(formValues.guests);
  //   setFormValues(
  //     ...formValues,
  //     formValues.guests: [...guests, guest]
  //   )
  // };

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
      {/* ----- Guest Inputs ----- */}
      <div>
        <label>Add Guests:</label>
        {guestList.map((guest, index) => {
          return (
            <div key={index}>
              <input
                type="text"
                name="username"
                placeholder="Name"
                value={guest.username}
                onChange={handleChanges}
              />
              <button>+</button>
              <button>-</button>
            </div>
          );
        })}
        <button>Submit Guests</button>
      </div>
    </form>
  );
};

export default PotluckForm;
