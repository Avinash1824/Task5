import React from "react";

export default function Agecalculator() {
  const findAge = () => {
    let date = document.getElementById("dateday");
    let currentDate = new Date().toJSON().slice(0, 10).split("-");
    let ymd = date.value.split("-");
    const arr1 = ymd.map(myFunction);
    const arr2 = currentDate.map(myFunction);
    function myFunction(num) {
      return Number.parseInt(num);
    }
    if (arr2[0] - arr1[0] > 0) {
      if (arr2[1] - arr1[1] < 0) {
        document.getElementById("val").innerHTML=arr2[0] - arr1[0] - 1;
      } else if (arr2[1] - arr1[1] === 0) {
        if (arr2[2] - arr1[2] >= 0) {
          document.getElementById("val").innerHTML=arr2[0] - arr1[0] ;
        } else {
          document.getElementById("val").innerHTML=arr2[0] - arr1[0] - 1;
        }
      } else {
        document.getElementById("val").innerHTML=arr2[0] - arr1[0] ;
      }
    } else {
      document.getElementById("val").innerHTML=0 ;
    }
  };
  return (
    <div className="container my-3 w-50 p-5">
      <div className="container p-5">
      <center>
      <h3 className="my-4">Age Calculator</h3>
      <div className="form-group">
        <label htmlFor="">Enter Your Date of Birth</label>
        <input type="date" className="form-control my-3" id="dateday" />
      </div>
      
      <button className="btn btn-primary my-2" onClick={findAge} >
        Calculate Age
      </button>
      <h5> Your are <span id="val">0</span> years old</h5>
      </center>

      </div>
    </div>
  );
}
