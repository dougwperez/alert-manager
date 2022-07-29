import { useState } from "react";
import logo from "./logo.svg";
import Alerts from "./AlertManager.js";
import AlertExample from "./components/AlertExample.js";
import Toast from "./components/Toast.js";
import Checkmark from "./components/Checkmark.js";
import Button from "./components/Button.js";
import { BUTTON_PROPS, TOAST_PROPERTIES } from "./toastProperties";

import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [position, setPosition] = useState("Select Position");
  let [checkValue, setCheckValue] = useState(false);
  const [autoDeleteTime, setAutoDeleteTime] = useState(0);

  const selectPosition = (e) => {
    setList([]);
  };

  const showToast = (type) => {
    const toastProperties = TOAST_PROPERTIES.find(
      (toast) => toast.title.toLowerCase() === type
    );
    setList([...list, toastProperties]);
  };

  const onCheckBoxChange = () => {
    checkValue = !checkValue;
    setCheckValue(checkValue);
    setList([]);
  };

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
      <>
        <div className="app">
          <p>React Toast Component</p>
          <div className="select">
            <Checkmark
              label="Auto Dismiss"
              checkValue={checkValue}
              onCheckBoxChange={onCheckBoxChange}
            />
            <br />
            <input
              className={`${!checkValue ? "disabled" : ""}`}
              type="text"
              name="dismiss"
              placeholder="Dismiss time Ex: 3000"
              autoComplete="false"
              onChange={(e) => setAutoDeleteTime(parseInt(e.target.value, 10))}
            />
            <br />
          </div>
          <br />
          <div className="toast-buttons">
            {BUTTON_PROPS.map((e) => (
              <Button
                key={e.id}
                className={`${e.className}`}
                label={e.label}
                handleClick={() => showToast(e.type)}
              />
            ))}
          </div>
        </div>

        <Toast
          toastList={list}
          position="top-right"
          autoDelete={checkValue}
          autoDeleteTime={autoDeleteTime}
        />
      </>
    </div>
  );
}

export default App;
