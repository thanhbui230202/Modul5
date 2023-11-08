import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import 'bootstrap/dist/css/bootstrap.css';
export function FormContact() {
  const contactInit = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const contactValidation = {
    name: Yup.string()
          .required("Required"),
    email: Yup.string()
          .required("Required")
          .matches( /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"Dont correct format abc@abc.com"),
    phone: Yup.string()
          .required("Required")
          .matches(
            /^(\+[0-9]{1,3}\s?)?(\([0-9]{3}\)|[0-9]{3})[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/,
            'Invalid phone number format'
          ),
  };
  return (
    <>
      <Formik
        initialValues={contactInit}
        onSubmit={(values) => {
          console.log(values);
          toast.success("Add contact successfully!!!");
        }}
        validationSchema={Yup.object(contactValidation)}
      >
        <div className="container">
          <h1>Contact form</h1>
          <Form>
            <div className="mb-3">
              <label htmlFor="contactName" className="form-label">Name</label>
              <Field type="text" className="form-control" name="name" id="studentName"/>
              <ErrorMessage name="name" component="span" className="form-err"></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="contactEmail" className="form-label">Email</label>
              <Field type="email" className="form-control" name="email" id="contactEmail"/>
              <ErrorMessage name="email" component="span" className="form-err"></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="contactPhone" className="form-label">Phone</label>
              <Field type="text" className="form-control" name="phone" id="contactPhone"/>
              <ErrorMessage name="phone" component="span" className="form-err"></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="contactMessage" className="form-label">Message</label>
              <Field as="textarea" className="form-control" name="message" id="contactMessage"/>
              <ErrorMessage name="message" component="span" className="form-err"></ErrorMessage>
            </div>
            <br></br>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </Form>
        </div>
      </Formik>
    </>
  );
}
