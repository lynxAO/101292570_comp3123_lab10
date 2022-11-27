//Abdelaziz Omar 101292570

import React, { useState } from 'react';
import Form, { initialFormState } from './Form';
import './App.css';


function App() {
  
  const [formData, setFormData] = useState({initialFormState});
  const [showData, setShowData] = useState(false);

  const formDisplay = {
    email: 'Email',
    name: 'Full Name',
    address1: 'Address',
    city: 'City',
    province: 'Province',
    postcode: 'Post Code'
  }

  return (
    <div className="App">
      <h1>Data Entry Form</h1>
      <Form submitForm={(formData) => {
          setFormData(formData)
          setShowData(true)
        }
      }/>
      
      {showData && (
        <div className="container" style={{ width: "50em" }}>
          {Object.keys(formDisplay).map((key) => {
              return (
                <div className="row m-2" key={key}>
                  <div className="col text-end pe-1">
                    <span className="text-success h5">{formDisplay[key]}:</span>
                  </div>
                  <div className="col text-start ps-1">
                    <span className="h5">{formData[key]}</span>
                  </div>
                </div>
              );
          })}
        </div>
      )} 
    </div>
  );
}

export default App;
