/* eslint-disable no-unused-vars */
// "use client";

import React, { useEffect, useState } from "react";
import "./Map.css";
import { useStateValue } from "../StateProvider";
import MapCanCard from "./cards/MapCanCard";

import {
  APIProvider,
  Map,
  Pin,
  AdvancedMarker,
  InfoWindow,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";

const hqPosition = { lat: 23.075367, lng: 76.850527 };

function MapPage() {
  const [{ canCollection }] = useStateValue();
  const [allLocations, setAllLocations] = useState([]);

  useEffect(() => {
    // Update locations whenever canCollection changes
    const locations = canCollection.map((can) => can.locationCoordinates);
    setAllLocations(locations);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canCollection, hqPosition]);

  return (
    <div className="map">
      <div className="map-left">
        {canCollection?.length === 0 ? (
          <div className="map-head">
            <h1>Add TrashCan To Show list...</h1>
          </div>
        ) : (
          <div>
            <h1 className="map-head">To be Collected</h1>
            <div className="map-product">
              {canCollection.map((can) => (
                <MapCanCard
                  trashCanId={can.trashCanId}
                  sensorId={can.sensorId}
                  trashCapacity={can.trashCapacity}
                  locationCoordinates={can.locationCoordinates}
                  valueAtEmpty={can.valueAtEmpty}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="map-rgt">
        <h1 className="map-head-r">Map View</h1>
        <div className="map-container">
          <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
            <div className="mp-map">
              <Map
                defaultZoom={17}
                defaultCenter={hqPosition}
                mapId={process.env.REACT_APP_GOOGLE_MAP_ID}
                fullscreenControl={false}
                streetViewControl={false}
                mapTypeId={"satellite"}
                mapTypeControl={false}
              >
                <AdvancedMarker map position={hqPosition} title={"HQ"}>
                  <Pin borderColor={"blue"} background={"blue"} />
                </AdvancedMarker>
                <Directions />
              </Map>
            </div>
          </APIProvider>
        </div>
      </div>
    </div>
  );
}

function Directions() {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [dirSer, setDirSer] = useState();
  const [dirRen, setDirRen] = useState();
  const [routes, setRoutes] = useState([]);
  const [{ canCollection }] = useStateValue();
  const [allLocations, setAllLocations] = useState([]);

  useEffect(() => {
    // Update locations whenever canCollection changes
    const locations = canCollection.map((can) => ({
      location: {lat: can.locationCoordinates._lat, lng: can.locationCoordinates._long},
      stopover: true,
    }));
    setAllLocations(locations);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canCollection, hqPosition]);

  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirSer(new routesLibrary.DirectionsService());
    setDirRen(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  useEffect(() => {
    if (!dirSer || !dirRen) return;

    dirSer
      .route({
        origin: hqPosition,
        destination: hqPosition,
        travelMode: 'DRIVING',
        waypoints : allLocations
      })
      .then((response) => {
        dirRen.setDirections(response);
        setRoutes(response.routes);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dirSer, dirRen, allLocations]);

  return null;
}

export default MapPage;
