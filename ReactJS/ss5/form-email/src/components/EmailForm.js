import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.css';
export function FormEmail(){
    const emailInit = {
        to: "",
        title: "",
        message: "",
        file: "",
      };
      const emailValidation = {
        to: Yup.string()
              .required("Required"),
        title: Yup.string()
              .required("Required"),
        file: Yup.string()
              .required("No file chosen")
      };
      return(
        <>
        <Formik
            initialValues={emailInit}
            onSubmit={(values) => {
                console.log(values);
                alert("Add contact successfully!!!");
            }}
            validationSchema={Yup.object(emailValidation)}
        >
         <div className="container">
          <h1>Mail form</h1>
          <Form>
            <div className="mb-3">
              <label htmlFor="contactName" className="form-label">To</label>
              <Field type="text" className="form-control" name="to" id="studentName"/>
              <ErrorMessage name="to" component="span" className="form-err"></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="contactEmail" className="form-label">Title</label>
              <Field type="text" className="form-control" name="title" id="contactEmail"/>
              <ErrorMessage sage name="title" component="span" className="form-err"></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="contactPhone" className="form-label">Message</label>
              <Field as="textarea" className="form-control" name="message" id="contactPhone"/>
              <ErrorMessage name="message" component="span" className="form-err"></ErrorMessage>
            </div>
            <div className="mb-3">
              {/* <label htmlFor="contactMessage" className="form-label">Chosse File</label> */}
              <Field type="file" className="form-control" name="file" id="contactMessage"/>
              <ErrorMessage name="file" component="span" className="form-err"></ErrorMessage>
            </div>
            <br></br>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </Form>
        </div>
        </Formik>
        </>
      )
}