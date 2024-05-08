import React from "react";
import "./HomeCard.css";
import { ReactComponent as TrashIcon } from "../../trash-bin.svg";

function HomeCard({
  trashCanId,
  sensorId,
  trashCapacity,
  locationCoordinates,
  valueAtEmpty,
}) {
  // Calculate fill percentage (dummy data for now)
  const fillPercentage = Math.floor(Math.random() * 101); 

  // Determine color based on fill percentage
  let fillColor = "green";
  if (fillPercentage > 40 && fillPercentage <= 60) {
    fillColor = "#cec325";
  } else if (fillPercentage > 60 && fillPercentage <= 75) {
    fillColor = "orange";
  } else if (fillPercentage > 75) {
    fillColor = "red";
  }
  const iconStyle = {
    fill: fillColor,
    height: "100px",
  };

  return (
    <div className="homeCard">
      <div className="cardContent">
        <div className="topSection">
          <p className="topSection__Id">{`${trashCanId}`}</p>
          <p className="topSection__Cords">{`${locationCoordinates._lat}`},{`${locationCoordinates._long}`}</p>
        </div>

        <div className="middleSection">
          <TrashIcon style={iconStyle} className="middleSection__icon" />
          <p className="middleSection__perc">{`${fillPercentage}%`}</p>
          <div className="fillBar__wraper">
            <div
              className="fillBar"
              style={{ width: `${fillPercentage}%`, background: fillColor }}
            />
          </div>
        </div>

        <div className="bottomSection">
          <button>Details</button>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
