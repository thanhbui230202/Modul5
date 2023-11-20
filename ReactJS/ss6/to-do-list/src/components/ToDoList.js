
import { Formik, Field, Form } from "formik";
import * as todoService from "../service/ToDoListService";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
export function CreateToDoList() {
  const [contents, setContents] = useState([]);
  const listInit = {
    content: "",
  };
  useEffect(() => {
    getAll();
  }, []);
  const addNewToDoList = async (values) => {
    await todoService.save(values);
    await getAll();
    alert("Success");
  };
  const getAll = async () => {
    let temp = await todoService.getAll();
    console.log(temp);
    setContents(temp);
  };
  return (
    <>
      <Formik
        initialValues={listInit}
        onSubmit={(values) => {
          addNewToDoList(values);
        }}
      >
        <div className="container">
          <h1>Todo List</h1>
          <Form>
            <div className="mb-3">
              <Field
                type="text"
                className="form-control"
                name="content"
                id="content"
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </Form>
          <ul>
                {contents.map((value, index) => {
                    return (
                        <li key={index}>{value.content}</li>
                    )
                })}
            </ul>
        </div>
      </Formik>
    </>
  );
}
