import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const initialState = () => {
  return {
    email: '',
    name: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postcode: '',
    acceptTerms: false
  }
}

const Form = ({ submitForm }) => {

  const provinces = [ 'Alberta', 'British Columbia', 'Manitoba', 
      'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 
      'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 
      'Saskatchewan', 'Yukon'];

  const [formData, setFormData] = useState({initialState});

  const handleChange = (event) => {
    setFormData(oldValues => ({
      ...oldValues, 
      [event.target.name]: (event.target.type === 'checkbox' ?  event.target.checked : event.target.value)
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(formData)
  }

  return (
    <div className="container" style={{ width: "50em" }}>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <label className="m-2">Email</label>
            <input
              name="email"
              type="text"
              onChange={handleChange}
              placeholder="Enter Email" 
              className="form-control" />
          </div>
          <div className="col">
            <label className="m-2">Name</label>
            <input
              name="name"
              type="text"
              onChange={handleChange}
              placeholder="Full Name" 
              className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="m-2">Address</label>
            <input
              name="address1"
              type="text"
              onChange={handleChange}
              placeholder="1234 Main St"
              className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="m-2">Address 2</label>
            <input
              name="address2"
              type="text"
              onChange={handleChange}
              placeholder="Apartment, studio, or floor"
              className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="m-2">City</label>
            <input
              name="city"
              type="text"
              onChange={handleChange}
              className="form-control" />
          </div>
          <div className="col">
            <label className="m-2">Province</label>
            <select 
              name="province"
              onChange={handleChange}
              defaultValue="" 
              className="form-control">
              <option disabled={true} hidden={true} value="">Select Province...</option>
              {
                provinces.map((province) => (
                  <option key={province} value={province}>{province}</option>
                ))
              }
            </select>
          </div>
          <div className="col">
            <label className="m-2">Postal Code</label>
            <input
              name="postcode"
              type="text"
              onChange={handleChange}
              className="form-control" />
          </div>
        </div>
        <div className="row m-2">
          <div className="col text-center">
            <div className="form-check-inline">
              <input 
                name="acceptTerms"
                type="checkbox"
                onChange={handleChange}
                className="form-check-input"></input>
              <label className="form-check-label ms-2">Accept Terms & Conditions?</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input 
              name="submit" 
              type="submit" 
              value="Submit" 
              className="btn btn-success m-2" />
          </div>
        </div>
      </form>
    </div>
  )
};

export default Form;
export { initialState as initialFormState };