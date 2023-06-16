import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from "react";
import { useState } from "react";
function App() {
  const [year,setYear] = useState(0);
  const [day,setDay] = useState(0);
  const [month,setMonth] = useState(0);

  const [date,setDate] = useState(0);
  
  
  const handleChange = (event) => {
    setDate(event.target.value);
  };
  var d = new Date(date);
       
      //  ((Math.abs(currentDate.getTime() - d.getTime()))/31536000000).toFixed(0);
      // Math.floor((Math.abs(currentDate.getTime() - d.getTime()))/ (1000 * 60 * 60 * 24));
      // Math.floor((Math.abs(currentDate.getTime() - d.getTime()) / 1000)/(60 * 60 * 24 * 7 * 4)); 
    const calculate = ()=>{
      var currentDate = new Date();
       var days =  currentDate.getDate() - d.getDate();
       var years = currentDate.getFullYear()-d.getFullYear();
       var months =   currentDate.getMonth()-d.getMonth();
       console.log(years+" "+months+" "+days);
      setYear(years);
      setDay(days);
      setMonth(months);
      document.getElementById("op").innerHTML=`Your age is ${year} years.`
      document.getElementById("op1").innerHTML=`You are ${month} months older.`
      document.getElementById("op2").innerHTML=`You were born ${day} days ago.`
    }
  return (
    <div className="App">
      <h1 className="">Age Calculator</h1>
      <h4>Enter Your Date of Birth</h4>
      <input onChange={handleChange} type="date" className="mt-4 form-control" placeholder="MM/DD/YYYY"/><br></br>
      <button className='btn btn-primary mb-3' onClick={calculate}>Calculate Age</button>
      <p id="op"></p>
      <p id="op1"></p>
      <p id="op2"></p>
    </div>
  );
}

export default App;
