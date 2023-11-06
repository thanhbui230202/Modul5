import {useEffect, useState} from "react";
function CountTime() {
    let [timer,setTimer] = useState(10);
    useEffect(() =>{
        const interval = setInterval(() => {
            if(timer == 0){
                clearInterval(interval);
                alert("Time's up");
            }else{
                setTimer(timer - 1);
            }
        },1000)
        return () =>{
            clearInterval(interval);
        }
    },[timer])

    return(
        <div>
            <h3>Count down from {timer}</h3>
        </div>
        
    )
}
export default CountTime;