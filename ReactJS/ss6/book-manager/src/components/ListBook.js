import { Formik, Field, Form } from "formik";
import * as BookService from '../service/BookService';
import React, {useState, useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
export function BookList(){
    const [books, setBook] = useState([])
    const bookInit = {
        title:"",
        quantity: 0
    }
    useEffect(() => {
        getAll();
      }, []);
    const getAll = async () => {
        let temp = await BookService.getAll();
        console.log(temp);
        setBook(temp);
    };
    const addNewBook = async (values) => {
        await BookService.save(values);
        await getAll();
        alert("Add new Success");
    };
    const deleteBook = async (values) =>{
        await BookService.deleteByID(values);
        await getAll();
        alert("Delete Success");
    }
    return(
        <>
        <Formik
            initialValues={bookInit}
            onSubmit={(values)=>{
                addNewBook(values)
            }}
        >
        <div className="container">
            <h1>Library</h1>
            <Form>
            <div className="mb-3">
              <label htmlFor="contactName" className="form-label">Title</label>
              <Field type="text" className="form-control" name="title" id="studentName"/>
            </div>
            <div className="mb-3">
              <label htmlFor="contactName" className="form-label">Quantity</label>
              <Field type="number" className="form-control" name="quantity" id="studentName"/>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
            </Form>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Number</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        books.map((values,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{values.title}</td>
                                    <td>{values.quantity}</td>
                                    <td><Link to={`/update/${values.id}`}>Edit</Link></td>
                                    <td><button type="button" onClick={(e)=>deleteBook(values.id)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
             </table>
            </div>
        </Formik>
        </>
    )
}