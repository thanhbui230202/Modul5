import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.css';
export function BookManager(){
    const bookInit = {
        title: "",
        quantity: 1,
    };
    const bookValidation = {
        title: Yup.string()
               .required("Require") ,
        quantity: Yup.number()
                .required("Require"),
    };
    const handleSubmit = () =>{
        
    }
    return(
        <>
        <Formik
            initialValues={bookInit}
            onSubmit={(values)=>{
                console.log(values);
            }}
            validationSchema={Yup.object(bookValidation)}
        >
        <div className='container'>
            <h1>Library</h1>
            <Form>
            <div className="mb-3">
              <label htmlFor="bookTitle" className="form-label">Title</label>
              <Field type="text" className="form-control" name="title" id="bookTitle"/>
              <ErrorMessage name="title" component="span" className="form-err"></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="bookQuantity" className="form-label">Quantity</label>
              <Field type="number" className="form-control" name="quantity" id="bookQuantity"/>
              <ErrorMessage sage name="quantity" component="span" className="form-err"></ErrorMessage>
            </div>
            <br></br>
            <button className='btn btn-primary' type='submit'>Submit</button>
            </Form>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Number</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        this
                    }
                </tbody>
            </table>
        </div>
        </Formik>
        </>
    )
}