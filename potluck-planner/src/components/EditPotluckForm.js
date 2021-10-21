import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
// import axios from 'axios';
import potluckFormSchema from "../schemas/potluckFormSchema"; 
import { editPotluck } from "../actions";

function EditPotluckForm(props) {
    const { push } = useHistory();
	  const { id } = useParams();
    const { potlucks } = props;
    
    const initialFormErrors = {
      date: "",
      time: "",
      location: ""
    }
      // State Management
      const [potluck, setPotluck] = useState(potlucks.find(potluck => potluck.id === parseInt(id)));
      const [formErrors, setFormErrors] = useState(initialFormErrors);
      const [disableFormSubmit, setDisableFormSubmit] = useState(true);
    
      useEffect(() => {
        potluckFormSchema
          .isValid(potluck)
          .then((valid) => setDisableFormSubmit(!valid));
      }, [potluck]);
    
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
        setPotluck({
          ...potluck,
          [event.target.name]: event.target.value,
        });
      };

      const handleSubmitForm = (event) => {
        event.preventDefault();
        // Store plannedPotluck into a new state
        editPotluck(potluck);
        push(`/potlucks/${id}`)
      };

      const handleCancel = event => {
        event.preventDefault();
        push(`/potlucks/${id}`)
      }
    
      // ----- Returning Potluck Form -----
    
      return (
        <form>
          <h3>{potluck.potluckName}</h3>
          {/* Validation Errors */}
          <div>
            <p>{formErrors.date}</p>
            <p>{formErrors.time}</p>
            <p>{formErrors.location}</p>
          </div>
          {/* Potluck Inputs */}
          <label>
            Date:
            <input
              type="text"
              name="date"
              value={potluck.date}
              onChange={handleChanges}
            />
          </label>
          <label>
            Time:
            <input
              type="text"
              name="time"
              value={potluck.time}
              onChange={handleChanges}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={potluck.location}
              onChange={handleChanges}
            />
          </label>
          {/* Submitting Form */}
          <button onClick={handleSubmitForm} disabled={disableFormSubmit}>
            Save Potluck Changes
          </button>
          <button onClick={handleCancel} >Cancel</button>
        </form>
      );
    };

const mapStateToProps = state => ({
        potlucks: state.potlucks
});

export default connect(mapStateToProps, { editPotluck })(EditPotluckForm);
