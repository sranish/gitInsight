//01.06.2025 - Day2
import { useState, useEffect } from "react";

function App() {
  
  // let [counterViz, setCounterViz] = useState(true);
  const [count, setCount] = useState(0);

  // useEffect(()=>{
  //   setInterval(()=>{
  //     setCounterViz(a => !a);
  //   },5000)
  // }, []); //dependency array
  
  
  //CONDITIONAL RENDERING + props
  return <div>      
    hi
    <Counter count={count}></Counter>
    hello
  </div>
}


//Mounting, Re-rendering & Unmounting are some lifecycle events.
function Counter(props) {
  // const [count, setCount] = useState(0);


  //hooking into the lifecycle events of react
  console.log("counter");

  //guards setInterval from re-renders
  useEffect(()=>{
    let clockId = setInterval(()=>{
      setCount(count => count + 1);
    }, 1000);

    console.log("mounted"); // comes only once

    return function() { 
      //manual CLEANUP  (if dependency array is empty)
      clearInterval(clockId);
    }
 
  }, []); 

  function incCount(){
    setCount(count + 1);  
  }

  return <div>
    {/* <h1 id="text">{count}</h1>
    <button onClick={incCount}>increase Count</button> */}

    Counter {props.count}
  </div>
}

export default App