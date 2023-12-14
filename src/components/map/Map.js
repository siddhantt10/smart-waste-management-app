import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";

function Map() {
  
  const handleHomeCardChange = () => {
    // Implement logic to change HomeCard data
    // For example, you can update trashCans state with new data
  };

  const handleOptimizedRoot = () => {
    // Implement logic for optimized route
    // You might want to calculate an optimized route based on the trash cans' coordinates
  };

  const handleEmptyTrashCans = () => {
    // Implement logic to empty trash cans
    // You might want to update the trashCans state by setting valueAtEmpty to 0
  };

  return (
    <div className="container">
      

      {/* Buttons below HomeCard */}
      <div className="buttons-container">
        <button onClick={handleHomeCardChange}>Change HomeCard Data</button>
        <button onClick={handleOptimizedRoot}>Optimized Route</button>
        <button onClick={handleEmptyTrashCans}>Empty Trash Cans</button>
        <button onClick={handleEmptyTrashCans}>Add Collection Point</button>
      </div>

      {/* Map component */}
      <MapContainer center={[51.505, -0.09]} zoom={13} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default Map;
