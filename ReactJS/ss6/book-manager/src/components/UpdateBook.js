import { Formik, Field, Form } from "formik";
import * as BookService from '../service/BookService';
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export function UpdateBook() {
  const [book, setBook] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const api = await BookService.getDataByID(id);
        console.log(api);
        setBook(api);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) {
    return null;
  }
  const bookInit = {
    title: book.title,
    quantity: book.quantity
    }
  const updateBook = async (values) => {
    try {
      await BookService.update(id, values);
      navigate('/');
      alert("Update Success");
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };
  return (
    <Formik
      initialValues={bookInit}
      onSubmit={(values) => {
        updateBook(values);
      }}
    >
      <div className="container">
        <h1>Library</h1>
        <Form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <Field type="text" className="form-control" name="title" id="title" />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantity</label>
            <Field type="number" className="form-control" name="quantity" id="quantity" />
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </Form>
      </div>
    </Formik>
  );
}
