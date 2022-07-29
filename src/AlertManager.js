import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function Alerts() {
  return (
    <Stack
      sx={{ width: "25%", position: "absolute", top: 15, right: 15 }}
      spacing={2}
    >
      <Alert severity="error" onClose={() => alert("close alert!")}>
        This is an error alert — check it out!
      </Alert>
      <Alert severity="warning" onClose={() => alert("close alert!")}>
        This is a warning alert — check it out!
      </Alert>
      <Alert severity="info" onClose={() => alert("close alert!")}>
        This is an info alert — check it out!
      </Alert>
      <Alert severity="success" onClose={() => alert("close alert!")}>
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
}
