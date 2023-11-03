import React,{Component} from "react";
class Caculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            result: 0,
        };
    }
    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value,
        });
      };
    addition = () => {
        this.setState({
          result: parseInt(this.state.num1) + parseInt(this.state.num2),
    });
    }
    subtraction = () => {
        this.setState({
          result: parseInt(this.state.num1) - parseInt(this.state.num2),
    });
    }
    multiplication = () => {
        this.setState({
          result: parseInt(this.state.num1) * parseInt(this.state.num2),
    });
    }
    division = () => {
        this.setState({
          result: parseInt(this.state.num1) / parseInt(this.state.num2),
    });
    }
    render() {
        return(
            <div>
            <input type="number" placeholder="num1" id="num1" value={this.state.num1} onChange={this.handleChange}></input>
            <input type="number" placeholder="num2" id="num2" value={this.state.num2} onChange={this.handleChange}></input>
            <p>Result: {this.state.result}</p>
            <button type="button" onClick={this.addition}>+</button>
            <button type="button" onClick={this.subtraction}>-</button>
            <button type="button" onClick={this.multiplication}>*</button>
            <button type="button" onClick={this.division}>/</button>
            </div>
        )
    }
}
export default Caculator;