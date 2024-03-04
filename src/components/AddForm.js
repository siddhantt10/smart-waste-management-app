import React from "react";
import { useState } from "react";
import "./AddForm.css";

// AddForm component

function AddForm() {
  const [formData, setFormData] = useState({
    sensorId: "",
    trashCanId: "",
    locationCoordinates: "",
    locationAddress: "",
    fillCapacity: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div className="addForm">
      <form onSubmit={handleSubmit} className="addForm__form">
        <label id="sensorId" >Sensor ID: </label>
        <input
          type="text"
          name="sensorId"
          id="sensorId"
          onChange={handleChange}
          required
        />
        <label id="trashCanId" >Trash Can ID: </label>
        <input
          type="text"
          name="trashCanId"
          id="trashCanId"
          onChange={handleChange}
          required
        />
        <label id="locationCoordinates" >Location Coordinates: </label>
        <input
          type="text"
          name="locationCoordinates"
          id="locationCoordinates"
          onChange={handleChange}
        />
        <label id="locationAddress" >Location Address: </label>
        <input
          type="text"
          name="locationAddress"
          id="locationAddress"
          onChange={handleChange}
        />
        <label id="fillCapacity" >Fill Capacity: </label>
        <input
          type="number"
          name="fillCapacity"
          id="fillCapacity"
          onChange={handleChange}
          min="0" // Ensure non-negative capacity
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddForm;
