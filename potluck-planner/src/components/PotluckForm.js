// Library Imports
import React, { useState } from "react";
import axios from "axios";

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

  // State
  const [formValues, setFormValues] = useState(initialFormValues);
  const [guest, setGuest] = useState("");

  // Handlers
  const handleChanges = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
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
      <label>
        Add Guests:
        <input
          type="text"
          name="guest"
          value={formValues.guest}
          onChange={handleChanges}
        />
      </label>
      <button onClick={handleSubmitGuest}>Submit Guest</button>
    </form>
  );
};

export default PotluckForm;
