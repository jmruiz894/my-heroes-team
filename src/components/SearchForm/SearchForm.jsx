import React from "react";
import { withFormik, Field, ErrorMessage, Form } from "formik";

import './SearchForm.css'

const SearchForm = ({ isSubmitting, isValid }) => {
  return (
    <div className="p-3 search-form">
      <Form className="row">
        <Field 
            name="search" 
            placeholder="Search heroes..."
            className="col col-10"
        />
        <ErrorMessage name="search">
            {message => <div className="error"> {message} </div>}
        </ErrorMessage>
        <button 
            type="submit"
            className="btn btn-primary col col-2"
            disabled={isSubmitting || !isValid}
        >
            X 
        </button>
      </Form>
    </div>
  );
};

export default withFormik({})(SearchForm)
