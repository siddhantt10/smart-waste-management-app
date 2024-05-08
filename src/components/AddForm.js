import React from "react";
import { useState } from "react";
import "./AddForm.css";
import {addDoc, collection} from 'firebase/firestore';
import {db} from '../config/firebase';
import { useNavigate } from "react-router-dom";

// AddForm component

function AddForm() {
  const [formData, setFormData] = useState({});

  const sensorCollectionRef = collection( db, "Trashcan");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "Location") {
      const [latitude, longitude] = value.split(",").map(parseFloat); // assuming input format is "latitude, longitude"
      setFormData({
        ...formData,
        Location: { _lat: latitude, _long: longitude },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addDoc(sensorCollectionRef, {
        SensorID: formData.SensorID,
        TrashcanID: formData.TrashcanID,
        Location: formData.Location,
        Address: formData.Address,
        Capacity: formData.Capacity
      });
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
    
  };


  return (
    <div className="addForm">
      <form onSubmit={handleSubmit} className="addForm__form">
        <label id="SensorID" className="addForm__label">
          Sensor ID:{" "}
        </label>
        <input
          className="addForm__input"
          type="text"
          name="SensorID"
          id="SensorID"
          onChange={handleChange}
          required
        />
        <label id="TrashcanID" className="addForm__label">
          Trash Can ID:{" "}
        </label>
        <input
          className="addForm__input"
          type="text"
          name="TrashcanID"
          id="TrashcanID"
          onChange={handleChange}
          required
        />
        <label id="Location" className="addForm__label">
          Location Coordinates:{" "}
        </label>
        <input
          className="addForm__input"
          type="text"
          name="Location"
          id="Location"
          onChange={handleChange}
          required
        />
        <label id="Address" className="addForm__label">
          Location Address:{" "}
        </label>
        <input
          className="addForm__input"
          type="text"
          name="Address"
          id="Address"
          onChange={handleChange}
          required
        />
        <label id="Capacity" className="addForm__label">
          Fill Capacity:{" "}
        </label>
        <input
          className="addForm__input"
          type="number"
          name="Capacity"
          id="Capacity"
          onChange={handleChange}
          min="0" // Ensure non-negative capacity
          required
        />
        <button type="submit" className="addForm__button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddForm;
