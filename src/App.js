import { useState } from "react";
import logo from "./logo.svg";
import Alerts from "./AlertManager.js";
import AlertExample from "./components/AlertExample.js";
import Toast from "./components/Toast.js";

import { BUTTON_PROPS, TOAST_PROPERTIES } from "./toastProperties";

import "./App.css";

function App() {
  const [list, setList] = useState([]);
  let [checkValue, setCheckValue] = useState(false);
  const [autoDeleteTime, setAutoDeleteTime] = useState(0);
  const [alertText, setAlertText] = useState("");
  const [alertLink, setAlertLink] = useState("");

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
        <Alerts />
        <br />
        <AlertExample
          showToast={showToast}
          setAutoDeleteTime={setAutoDeleteTime}
          setAlertText={setAlertText}
          setAlertLink={setAlertLink}
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
