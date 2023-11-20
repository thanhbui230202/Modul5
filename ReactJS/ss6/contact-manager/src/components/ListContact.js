import { Formik, Field, Form } from "formik";
import React, {useState, useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';
import * as contactService from '../service/ContactService'
import 'bootstrap/dist/css/bootstrap.css';
export function ListContact(){
    const [contacts, setContact] = useState([])
    const contactInit = {
        name : "",
        image : "",
        email : "",
        phone : ""
    }
    useEffect(()=>{
        getAll();
    },[]);
    const getAll = async() =>{
        let temp = await contactService.getAll();
        setContact(temp);
    }
    const addNew = async(values) =>{
        await contactService.save(values);
        await getAll();
        alert("Add new Success");
    }
    const deleteContact = () =>{

    }
    return(
        <>
        <Formik
            initialValues={contactInit}
            onSubmit={(values) => {
                addNew(values)
            }}
        >
            <div className="container">
                <h1>Contacts</h1>
                <Form>
                    <div className="mb-3">
                        <label htmlFor="contactName" className="form-label">Image</label>
                        <Field type="file" className="form-control" name="image" id="fileUpload"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contactName" className="form-label">Name</label>
                        <Field type="text" className="form-control" name="name" id="nameContact"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contactName" className="form-label">Email</label>
                        <Field type="email" className="form-control" name="email" id="nameContact"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contactName" className="form-label">Phone</label>
                        <Field type="text" className="form-control" name="phone" id="nameContact"/>
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <br></br>
                </Form>
                <table>
                    <thead>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </thead>
                    <tbody>
                        {
                            contacts.map((values, index) =>{
                                return(
                                    <tr key={index}>
                                        <td>{values.image}</td>
                                        <td>{values.name}</td>
                                        <td>{values.email}</td>
                                        <td>{values.phone}</td>
                                        <td><Link to={`/update/${values.id}`}>Edit</Link></td>
                                        <td><button type="button" onClick={(e)=>deleteContact(values.id)}>Delete</button></td>
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