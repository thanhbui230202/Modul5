import { useState } from "react";
function Counter() {
    let [count, setCount] = useState(0);
    const count1 = () => {
        const newValue = count + 1;
        setCount(newValue);
      };
    const count2 = () => {
        const newValue = count + 2;
        setCount(newValue);
      };
      return (
        <div>
          Count 1: {count}
          <div>
            <button onClick={count1}>Add 1</button>
          </div>
          Count 2: {count}
          <div>
            <button onClick={count2}>Add 2</button>
          </div>
        </div>
      );
    
}
export default Counter;