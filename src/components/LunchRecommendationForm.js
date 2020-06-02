import React, { useState, useEffect } from "react";
import "../css/LunchRecommendationForm.css";

const defaultFormValues = {
  "name": "",
  "address": "",
  "link": ""
}

const deriveErrors = (formValues) => {
  let  errors = [];
  for (const property in formValues) {
    if (!formValues[property]) {
      errors.push(`${property} has not been set`);
    }
  }
  return errors;
}

function LunchRecommendationForm() {
  const [formValues, setFormValues] = useState(() => defaultFormValues);
  const [errors, setErrors] = useState(() => []);
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    if(!errors.length) {
      setDisabled(false);
    }
  }, [errors])

  useEffect(() => {
    setErrors(deriveErrors(formValues));
  }, [formValues])

  function handleSubmit(event) {
    if(errors.length) {
      event.preventDefault();
      setDisabled(true);
      alert("Missing form values.")
    } else{ 
      alert("Your submission has totally been submitted!");
    }
  }

  function handleChange(event) {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value
    });
  };

  const errorWarnings = errors.map(error => <li key={0}>{error}</li>);
  return (
    <form className="RecommendationForm" onSubmit={handleSubmit}>
      <legend>Your Lunch Recommendation</legend>
      { (disabled) ?
        <div className="errors">
          <ul>{errorWarnings}</ul>
        </div> :
        null
      }
      <div>
        <label htmlFor="name">Restaurant Name</label>
        <input type="text" id="name" onChange={handleChange} />

        <label htmlFor="address">Address</label>
        <input type="text" id="address" onChange={handleChange} />

        <label htmlFor="link">Link</label>
        <input type="text" id="link" onChange={handleChange} />
      </div>
      <button disabled={disabled} type="submit">Submit</button>
    </form>
  ) 
}

export default LunchRecommendationForm;
