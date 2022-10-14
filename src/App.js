import './App.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import React, { useState, useEffect } from 'react'
import IpInfoContainer from './Components/IpInfoContainer';

export default function App() {

  let [address, setAddress] = useState(null)
  let [data, setData] = useState(null)
  let [marker, setMarker] = useState([51.505, -0.09])

  function userSubmit(e){
    e.preventDefault()
    let userInput = document.getElementById("user-input")
    setAddress(userInput.value)
  }

  useEffect(() => {
  },[])

  useEffect(() => {
    async function IpAddressFinder() {
      let endpoint = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_apiKey}&ipAddress=${address}`
      try {
        const response = await fetch(endpoint);
        console.log(response)
        if(response.ok){
          const jsonResponse = await response.json()
          setData(jsonResponse)
        }
      }
      catch(error){
        console.log(error)
      }
    }
    IpAddressFinder()
  },[address])

  useEffect(() => {
    if (data !== null) {
      console.log(data.ip)
      console.log(`${data.location.city}, ${data.location.region}`)
      console.log(data.location.timezone)
      console.log(data.isp)
      setMarker([data.location.lat, data.location.lng])
    }
  },[data])

  return (
    <div className="App">
      <header className="App-header">
        <h1>IP Address Tracker</h1>
        <div className="searchInput">
          <form onSubmit={userSubmit}>
            <input id="user-input" type="text" placeholder="Search for any IP address or domain"></input>
            <button type="submit"><img src="images/icon-arrow.svg" alt="arrow icon within a button" /></button>
          </form>
            {data === null ? <div></div> : <IpInfoContainer data={data} />}
        </div>
      </header>
      <div id="leaflet-container">
        <MapContainer id="map-container" center={marker} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={marker}>
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