import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "../App.css";

const AlertComponent = (props) => {
  const { toast, alertLink, deleteToast } = props;
  console.log("Koca: toast in Alert ", toast);

  return (
    <>
      <Alert
        sx={{ height: 90, width: 412 }}
        variant="filled"
        severity={toast.severity}
        onClose={() => deleteToast(toast.id)}
      >
        <p className="notification-title">{toast.title}</p>
        <p className="notification-message">{toast.description}</p>
        <a href={alertLink} rel="noreferrer" target="_blank">
          {alertLink}
        </a>
      </Alert>
    </>
  );
};

export default Alert;
