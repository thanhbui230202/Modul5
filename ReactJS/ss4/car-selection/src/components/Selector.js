import { useState, useEffect } from "react";
function Selector() {
    const [selectCar,setSelectCar]= useState({car:"",color:""});
    const cars = ["Audi Q8","Mercerdes C300 AMG","Toyota Camry","Chervolet Camaro"];
    const colors = ["white","black","red","yellow","red"];

    const handle = (prop, value) =>{
      setSelectCar((pre) =>{
        return{
          ...pre,
          [prop]:value 
        }           
      })
    }
      return (
        <div>
          <h1>Selected Your Car</h1>
          <br></br>
          <span>
            <h3>Selected a car</h3>
            <select value={selectCar.car} onChange={(e) => handle("car", e.target.value)}>
                    {cars.map((value, index) => {
                        return <option key={index}>{value}</option>
                    })}
                </select>
          </span>
          <span>
            <h3>Selected a color</h3>
            <select value={selectCar.color} onChange={(e) => handle("color", e.target.value)}>
                    {colors.map((value, index) => {
                        return <option key={index}>{value}</option>
                    })}
                </select>
          </span>
          <h3>You selected a {selectCar.color} - {selectCar.car}</h3>
        </div>
    );
}
export default Selector;