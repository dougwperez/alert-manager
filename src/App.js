import { useState } from "react";
import logo from "./logo.svg";
import AlertExample from "./components/AlertExample.js";
import Toast from "./components/AlertManager.js";

import checkIcon from "./assets/check.svg";
import errorIcon from "./assets/error.svg";
import infoIcon from "./assets/info.svg";
import warningIcon from "./assets/warning.svg";

import { BUTTON_PROPS, TOAST_PROPERTIES } from "./toastProperties";

import "./App.css";

function App() {
  const [list, setList] = useState([]);
  let [checkValue, setCheckValue] = useState(false);
  const [autoDeleteTime, setAutoDeleteTime] = useState(0);
  const [alertText, setAlertText] = useState("");

  const [alertLink, setAlertLink] = useState("");

  const showToast = (type, text, obj) => {
    const toastProperties = TOAST_PROPERTIES.find((toast) => {
      return toast.title.toLowerCase() === type;
    });

    setList([...list, obj]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <br />
        <AlertExample
          showToast={showToast}
          setAutoDeleteTime={setAutoDeleteTime}
          setAlertText={setAlertText}
          setAlertLink={setAlertLink}
          list={list}
          setList={setList}
        />
      </header>
      <>
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
