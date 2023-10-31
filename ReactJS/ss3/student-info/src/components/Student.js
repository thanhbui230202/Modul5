import React,{Component} from "react";
class Student extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           <tr>
            <td>{this.props.id}</td>
            <td>{this.props.name}</td>
            <td>{this.props.age}</td>
            <td>{this.props.address}</td>
           </tr>
        )
    }
}
export default Student;