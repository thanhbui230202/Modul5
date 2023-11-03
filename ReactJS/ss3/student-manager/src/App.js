import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      form: { name: "", phone: "", email: "" },
      isValid: false,
      indexSelected: -1,
    };
  }
  handleChange = (event) => {
    this.setState(
      (state) => {
        const form = state.form;
        form[event.target.name] = event.target.value;
        return { form };
      },
      () => this.checkInvalidForm()
    );
  };
  handleSelect = (studentSelected, index) => {
    this.setState({
      form: JSON.parse(JSON.stringify(studentSelected)),
      indexSelected: index,
    });
  };
  checkInvalidForm = () => {
    const { name, phone, email } = this.state.form;
    const value = name && phone && email;
    this.setState({
      isValid: value,
    });
  };
  handleSubmit = () => {
    if (this.state.isValid) {
      const newList = this.state.studentList;
      if (this.state.indexSelected > -1) {
          newList.splice(this.state.indexSelected,1,this.state.form)
      } else {
          newList.push(this.state.form)
      }
      this.setState({
          studentList: newList,
          form: { 
            name: "", 
            phone: "", 
            email: "" ,
            isValid: false,
            indexSelected: -1,
          }
      });
    }
  };
  handleDelete = (index) => {
    const list = this.state.studentList;
    list.splice(index, 1);
    this.setState({ studentList: list }); 
  };
  render() {
    const { studentList, form } = this.state;
    return (
      <div>
        <div>
          <h1>Student List</h1>
          <div>
            <label>Name: </label>
            <input name="name" value={form.name} onChange={this.handleChange} />
          </div>
          <div>
            <label>Phone: </label>
            <input
              type="number"
              name="phone"
              value={form.phone}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              name="email"
              value={form.email}
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.studentList.map((values,index) =>{
                  return(
                    <tr key={index}>
                    <td>{values.name}</td>
                    <td>{values.phone}</td>
                    <td>{values.email}</td>
                    <td>
                    <button onClick={() => this.handleSelect(values, index)}>
                      Update
                    </button>
                    <button onClick={() => this.handleDelete(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
