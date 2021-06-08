import React from "react";
import { withFormik, Field, ErrorMessage, Form } from "formik";
import * as Yup from 'yup'
import "./LoginForm.css";
import axios from "axios";


const LoginForm = ({ isSubmitting, isValid }) => {
  return (
    <div className="login mt-3">
      <div className="card w-50 text-center">
        <Form className="form">
          <Field
            name="email"
            placeholder="Enter your email..."
            type="email"
            className="input form-control"
          />
          <ErrorMessage name="email">
            {(message) => <div className="error"> {message} </div>}
          </ErrorMessage>
          <Field
            name="password"
            placeholder="Enter your password..."
            type="password"
            className="input form-control"
          />
          <ErrorMessage name="password">
            {(message) => <div className="error"> {message} </div>}
          </ErrorMessage>
          <div className="button">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting || !isValid}
              variant="contained"
              color="primary"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default withFormik({
    mapPropsToValues(props) {
        return {
            email: '',
            password: '',
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email is not valid').required('Email is required'),
        password: Yup.string().min(5, "The password must be at least 5 characters long").required('Password is required')
    }),
    handleSubmit(values, { history, resetForm }) {
        axios.post('http://challenge-react.alkemy.org/', values)
            .then(data => {
                const token = data.data.token
                localStorage.setItem('token', token)
                history.push('/home')
            }).catch(err => {
                console.log(err)
                resetForm()
            })
    }
})(LoginForm);
