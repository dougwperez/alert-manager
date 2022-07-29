import logo from "./logo.svg";
import Alerts from "./AlertManager.js";
import AlertExample from "./AlertExample.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Alerts />
        <br />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <AlertExample />
      </header>
    </div>
  );
}

export default App;
