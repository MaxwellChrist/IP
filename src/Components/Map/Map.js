import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

const customIcon = new L.Icon({
  iconSize: [35, 45],
  iconUrl: './images/icon-location.svg',
});

const MoveMapLayer = ({ center, zoom }) => {
  const map = useMap();
  map.flyTo(center, zoom, { duration: 1 });
  return null;
};

function Map({marker}) {
  return (
    <div id="leaflet-container">
      <MapContainer id="map-container" center={marker} zoom={12} scrollWheelZoom={true}>
        <MoveMapLayer center={marker} zoom={12} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={marker} icon={customIcon}></Marker>
      </MapContainer>
    </div>
  );
}

export default Map;