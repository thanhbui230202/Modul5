import './App.css';
import React, { Component } from 'react';
class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        list: [],
        item: ''
      }
    }
    handleChange = (event) => {
        this.setState({
            item:event
        })
    }
    handleAddItem = () => {
      this.setState((prve) => {
        return {
            list: [...prve.list, prve.item]
        }
    })
    }
    render(){
      return(
          <div>
            <h3>To do list</h3>
            <div>
              <input type='text' onChange={(evt) => this.handleChange(evt.target.value)}></input>
              <button onClick={this.handleAddItem} type='submit'>Add</button>
            </div>
            <table>
              <thead>
                  <tr>List</tr>
              </thead>
              <tbody>
                  {
                    this.state.list.map((values,index) =>{
                      return(
                        <tr key={index}>{values}</tr>
                      )
                    })
                  }
              </tbody>
            </table>
          </div>
      )
    }
}

export default App;
