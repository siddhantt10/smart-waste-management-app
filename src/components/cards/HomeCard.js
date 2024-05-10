import React from "react";
import "./HomeCard.css";
import { ReactComponent as TrashIcon } from "../../trash-bin.svg";
import { useStateValue } from "../../StateProvider";

function HomeCard({
  trashCanId,
  sensorId,
  trashCapacity,
  locationCoordinates,
  valueAtEmpty,
}) {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();
  // eslint-disable-next-line no-unused-vars
  const [{ canCollection }] = useStateValue();

  const addToMap = () => {
    dispatch({
      type: "add_to_map",
      item: {
        trashCanId: trashCanId,
        sensorId: sensorId,
        trashCapacity: trashCapacity,
        locationCoordinates: locationCoordinates,
        valueAtEmpty: valueAtEmpty,
      }
    })
  };



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
          <button onClick={addToMap}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
