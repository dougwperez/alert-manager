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
  const [alertText, setAlertText] = useState(
    "The task of art today is to bring chaos into order."
  );
  const [alertLink, setAlertLink] = useState("");

  // console.log("Koca: autoDeleteTime ", autoDeleteTime);

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
        <AlertExample
          showToast={showToast}
          setAutoDeleteTime={setAutoDeleteTime}
          setAlertText={setAlertText}
          setAlertLink={setAlertLink}
        />
      </header>
      <>
        {/* <div className="app">
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
        </div> */}

        <Toast
          toastList={list}
          position="top-right"
          autoDelete={checkValue}
          autoDeleteTime={autoDeleteTime}
          alertText={alertText}
          alertLink={alertLink}
        />
      </>
    </div>
  );
}

export default App;
