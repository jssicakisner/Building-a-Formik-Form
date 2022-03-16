import './index.css';
import React from "react";
// TODO: import useFormik from formik library
import {Formik, useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values =>{
      alert("Login Successful");
    },
    validate: values =>{
      let errors = {};
      if (!values.email) {
        errors.email = 'Field required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email'
      }
      if(!values.password) errors.password = 'Field required';
      return errors;
    },
  });

  return (
    <div>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here.
      </p>
      <form onSubmit={formik.handleSubmit}>
      <div>Username:</div>
      <input 
        id="emailField" 
        name="email" 
        type="text" 
        onChange={formik.handleChange} 
        value={formik.values.email}
        />
      {formik.errors.email ? ( 
        <div id="emailError" style={{color:'red'}}>
          {formik.errors.email}</div>
      ) : null}
      <div>Password:</div>
      <input id="pswField" 
        name="password" 
        type="text" 
        onChange={formik.handleChange} 
        value={formik.values.password}
        />
      {formik.errors.password ? ( 
      <div id="pswError" style={{color:'red'}}>
        {formik.errors.password}</div>
      ) : null}
      <button id="submitBtn" type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App