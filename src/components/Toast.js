import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../App.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Toast = (props) => {
  const { toastList, autoDelete, autoDeleteTime, alertText, alertLink } = props;
  console.log("Koca: autoDeleteTime ", autoDeleteTime);

  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, autoDeleteTime);

    return () => {
      clearInterval(interval);
    };

    // eslint-disable-next-line
  }, [toastList, autoDeleteTime, list]);

  const deleteToast = (id) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };

  return (
    <>
      <div className={`notification-container top-right`}>
        {list.map((toast, i) => (
          <div
            key={i}
            className={`notification toast top-right`}
            style={{
              backgroundColor: toast.backgroundColor,
              width: 440,
              height: 92,
            }}
          >
            <div
              style={{
                transform: "translateX(3px)",
                transform: "translateY(-10px)",
              }}
            >
              <Alert
                sx={{ height: 90, width: 412 }}
                variant="filled"
                severity={toast.severity}
                onClose={() => deleteToast(toast.id)}
              >
                <p className="notification-title">{toast.title}</p>
                <p className="notification-message">{alertText}</p>
                <a href={alertLink} rel="noreferrer">
                  {alertLink}
                </a>
              </Alert>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Toast.propTypes = {
  toastList: PropTypes.array.isRequired,

  autoDelete: PropTypes.bool,
  autoDeleteTime: PropTypes.number,
};

export default Toast;
