import React,{useState} from 'react'
import axios from 'axios';


function App() {
  // const url =
  //   `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={cfa5adc49cdadebd9e245a3866f0b5b7}`;

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>140°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>40°F</p>
          </div>
          <div className='humidity'>
            <p>20%</p>
          </div>
          <div className='wind'>
            <P>12MPH</P>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
