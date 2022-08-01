import { useState } from "react";
import logo from "./logo.svg";
import AlertExample from "./components/AlertExample.js";
import Toast from "./components/AlertManager.js";

import checkIcon from "./assets/check.svg";
import errorIcon from "./assets/error.svg";
import infoIcon from "./assets/info.svg";
import warningIcon from "./assets/warning.svg";

import "./App.css";

function App() {
  const [list, setList] = useState([]);
  let [checkValue, setCheckValue] = useState(false);
  const [autoDeleteTime, setAutoDeleteTime] = useState(0);

  const showToast = (obj) => {
    setList([...list, obj]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <br />
        <AlertExample
          showToast={showToast}
          setAutoDeleteTime={setAutoDeleteTime}
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
        />
      </>
    </div>
  );
}

export default App;
