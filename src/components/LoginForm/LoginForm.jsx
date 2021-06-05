import React from "react";
import { withFormik, Field, ErrorMessage, Form } from "formik";
import "./LoginForm.css";
// import { Link } from 'react-router-dom'

const LoginForm = ({ handleSubmit, isSubmitting, isValid }) => {
  return (
    <div className="login mt-3">
      <div className="card w-50 text-center">
        <Form className="form">
          <Field
            name="email"
            placeholder="Ingresa tu e-mail..."
            type="email"
            className="input form-control"
          />
          <ErrorMessage name="email">
            {(message) => <div className="error"> {message} </div>}
          </ErrorMessage>
          <Field
            name="password"
            placeholder="Ingresa tu contraseña..."
            type="password"
            className="input form-control"
          />
          <ErrorMessage name="password">
            {(message) => <div className="error"> {message} </div>}
          </ErrorMessage>
          <div className="button">
            <button
              type="submit"
              // is not submitting, button gets disable...
              className="btn btn-primary"
              disabled={isSubmitting || !isValid}
              variant="contained"
              color="primary"
            >
              Enviar
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default withFormik({
})(LoginForm);
