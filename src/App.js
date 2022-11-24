import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import airFatalitites from './air-fatalitites.json';

export default function App() {

  console.log(airFatalitites);
  return (
    <div className="leaftlet-container">
            <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />


      {airFatalitites.map(airFatality => (
        <Marker key={airFatality.Id} position={[airFatality.lat, airFatality.long]}>
        <Popup>
          <p>Date: {airFatality.Date}</p>
          <p>Location: {airFatality.Location}</p>
          <p>Aircraft type: {airFatality["AC Type"]}</p>
          <p>Operator: {airFatality.Operator}</p>
          <p>Route: {airFatality.Route}</p>
          <p>Fatalitites: {airFatality.Fatalities}</p>
          <p>Summary: {airFatality.Summary}</p>
        </Popup>
      </Marker>
      ))}

      </MapContainer>
    </div>
  );
}
