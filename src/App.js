import './App.css';
import React, { useState, useEffect } from 'react'
import SearchInfo from './Components/SearchInfo/SearchInfo';
import Map from './Components/Map/Map';
import ErrorInfo from './Components/ErrorInfo/ErrorInfo';

export default function App() {

  let [address, setAddress] = useState(null)
  let [data, setData] = useState(null)
  let [marker, setMarker] = useState([51.505, -0.09])
  let [error, SetError] = useState(null)

  function userSubmit(e){
    e.preventDefault()
    let userInput = document.getElementById("user-input")
    setAddress(userInput.value)
  }

  useEffect(() => {
    async function IpAddressFinder() {
      let endpoint = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_apiKey}&ipAddress=${address}`
      try {
        const response = await fetch(endpoint);
        console.log(response)
        if(response.ok){
          const jsonResponse = await response.json()
          setData(jsonResponse)
          SetError(null)
        } else {
          SetError(response.statusText)
        }
      }
      catch(error){
        console.log(error)
        SetError(error.messages)
      }
    }
    IpAddressFinder()
  },[address, error])

  useEffect(() => {
    if (data !== null) {
      setMarker([data.location.lat, data.location.lng])
      SetError(null)
    }
  },[data])

  return (
    <main className="App">
      <header className="App-header">
        <h1>IP Address Tracker</h1>
        <div className="search-input">
          <form onSubmit={userSubmit}>
            <input id="user-input" type="text" placeholder="Search for any IP address or domain"></input>
            <button id="user-submit" type="submit"><img src="images/icon-arrow.svg" alt="arrow icon within a button" /></button>
          </form>
          {data === null ? <div></div> : <SearchInfo data={data} />}
          {error !== null && address !== null ? <ErrorInfo error={error} />: <div></div>}
        </div>
      </header>
      <Map data={data} marker={marker} />
      <div className="attribution">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a></p> 
        <p>Coded by <a href="https://github.com/MaxwellChrist/IP">Max Christ</a></p>
      </div>
    </main>
  );
}