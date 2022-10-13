import './App.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>IP Address Tracker</h1>
        <div className="searchInput">
          <form>
            <input type="text" placeholder="Search for any IP address or domain"></input>
            <button type="submit"><img src="images/icon-arrow.svg" alt="arrow icon within a button" /></button>
          </form>
        </div>
      </header>
      <div id="leaflet-container">
      <MapContainer id="map-container" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      </MapContainer>
      </div>
      <div className="attribution">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>.</p> 
        <p>Coded by <a href="https://github.com/MaxwellChrist/IP">Max Christ</a>.</p>
      </div>
    </div>
  );
}