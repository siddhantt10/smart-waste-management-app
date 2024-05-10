import React from "react";
import "./MapCanCard.css";
import { useStateValue } from "../../StateProvider";

function MapCanCard({
  trashCanId,
  sensorId,
  trashCapacity,
  locationCoordinates,
  valueAtEmpty,
}) {
  // eslint-disable-next-line no-unused-vars
  const [{ canCollection }, dispatch] = useStateValue();

  const removeFromMap = () => {
    dispatch({
      type: "remove_from_map",
      trashCanId: trashCanId,
    });
  };
  return (
    <div className="mapCanCard">
      <div className="mcc-detail">
        <h1>{trashCanId}</h1>
        <p>{locationCoordinates._lat}, {locationCoordinates._long}</p>
      </div>
      <div className="mcc-btns">
        <button className="mcc-btn" onClick={removeFromMap}>
          Collected
        </button>
        <button className="mcc-btn">
          Details
        </button>
      </div>
    </div>
  );
}

export default MapCanCard;
