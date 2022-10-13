import './App.css';

function App() {
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
      <div className="attribution">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>.</p> 
        <p>Coded by <a href="https://github.com/MaxwellChrist/IP">Max Christ</a>.</p>
      </div>
    </div>
  );
}

export default App;
