import React from 'react'
import './Searchbar.css'
import SearchInfo from '../Searchbar/Searchbar';

export default function Searchbar({data, setAddress}) {
    
    function userSubmit(e){
        e.preventDefault()
        let userInput = document.getElementById("user-input")
        setAddress(userInput.value)
    }
    
    return (
        <>
            <header className="App-header">
                <h1>IP Address Tracker</h1>
                <div className="searchInput">
                    <form onSubmit={userSubmit}>
                        <input id="user-input" type="text" placeholder="Search for any IP address or domain"></input>
                        <button type="submit"><img src="images/icon-arrow.svg" alt="arrow icon within a button" /></button>
                    </form>
                    {data === null ? <div></div> : <SearchInfo data={data} />}
                </div>
            </header>
        </>
    )
}