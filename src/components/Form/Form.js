import React, { useState, useEffect } from "react";
import Input from "./Input";
import * as yup from "yup";
import axios from "axios";

export default function Form() {
  // react state
  const defaultState = {
    name: "",
    email: "",
    motivation: "",
    position: "",
    terms: false
  };
  const [formState, setFormState] = useState(defaultState);
  const [errors, setErrors] = useState({ ...defaultState, terms: "" });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  //formState schema
  let formSchema = yup.object().shape({
    name: yup.string().required("Please provide name."),
    email: yup
      .string()
      .required("Please provide a email.")
      .email("This is not a valid email."),
    motivation: yup
      .string(),
    position: yup.string()
  });

  useEffect(() => {
    // formSchema.isValid(formState).then(valid => setButtonDisabled(!valid));
    if (formState.terms) {
      setButtonDisabled(!formState.terms);
    }
  }, [formState]);

  // onSubmit function
  const formSubmit = e => {
    e.preventDefault();
    console.log("form submitted!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then(() => console.log("form submitted success"))
      .catch(err => console.log(err));
  };

  //validate whether value meets the schema
  const validateChange = e => {
    //this allows react to keep the event object to play nice with async op
    e.persist();
    //reach allows us to check a specific value of the schema
    // yup
    //   .reach(formSchema, e.target.name)
    //   .validate(e.target.value)
    //   .then(valid =>
    //     setErrors({
    //       ...errors,
    //       [e.target.name]: ""
    //     })
    //   )
    //   .catch(error =>
    //     setErrors({
    //       ...errors,
    //       [e.target.name]: error.errors[0]
    //     })
    //   );
    if (e.target.value.length === 0) {
      setErrors({
        ...errors,
        [e.target.name]: `${e.target.name} field is required`
      });
    }
  };
  // onChange function
  const inputChange = e => {
    //ternary operator to determine the form value
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value
    });
    validateChange(e);
  };

  return (
    <form onSubmit={formSubmit}>
      <Input
        type="text"
        name="name"
        onChange={inputChange}
        value={formState.name}
        label="Name"
        errors={errors}
      />
      <Input
        type="email"
        name="email"
        onChange={inputChange}
        value={formState.email}
        label="Email"
        errors={errors}
      />
      
      <label htmlFor="position">
        Choose Size
        <select name="position" onChange={inputChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Extra Large">Extra Large</option>
        </select>
      </label>

      <Input
        type="text"
        name="motivation"
        onChange={inputChange}
        value={formState.motivation}
        label="Special Instructions"
        errors={errors}
      />
      <label className="terms" htmlFor="terms">
        Additional Toppings <br />
        <input name="terms" type="checkbox" onChange={inputChange} />
        Bacon
      </label>
      <label className="terms" htmlFor="terms">
        <input name="terms" type="checkbox" onChange={inputChange} />
        Onions
      </label>
      <label className="terms" htmlFor="terms">
        <input name="terms" type="checkbox" onChange={inputChange} />
        Mushrooms
      </label>
      <label className="terms" htmlFor="terms">
        <input name="terms" type="checkbox" onChange={inputChange} />
        Ham
      </label>
      
      <button disabled={buttonDisabled}>Order Pizza</button>
    </form>
  );
}
