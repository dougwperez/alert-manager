import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input } from "@material-ui/core";
import { Input as AntdInput, InputNumber } from "antd";
import "../App.css";

import checkIcon from "../assets/check.svg";
import errorIcon from "../assets/error.svg";
import infoIcon from "../assets/info.svg";
import warningIcon from "../assets/warning.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

export default function AlertExample(props) {
  const { showToast, setAutoDeleteTime } = props;
  const [open, setOpen] = React.useState(false);
  const { control, handleSubmit, reset, formState } = useForm({
    mode: "onChange",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data) => {
    if (data.severity.value) {
      const newAlertObj = {
        id: Math.floor(Math.random() * 101 + 1),
        title: data.severity.label,
        description: data.Text,
        link: data.link,
        backgroundColor: "#2c5263",
        borderRadius: 1,
        severity: data.severity.value,
        icon: errorIcon,
      };
      setAutoDeleteTime(parseInt(data.timeLimit * 1000, 10));
      showToast(newAlertObj);
      handleClose();
      reset();
    }
  };

  return (
    <div className="Alert-modal">
      <Button onClick={handleOpen} type="submit">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create Alert
        </Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Submit an Alert
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label style={{ marginBottom: -1 }}>Time Limit</label>
            <Controller
              render={({ field }) => (
                <InputNumber
                  min={1}
                  max={10}
                  {...field}
                  style={{ width: 50 }}
                />
              )}
              name="timeLimit"
              control={control}
              defaultValue="10"
            />
            <label>Text</label>
            <Controller
              render={({ field }) => <AntdInput {...field} />}
              name="Text"
              control={control}
              defaultValue=""
            />
            <label>Link (URL)</label>
            <Controller
              render={({ field }) => <AntdInput {...field} />}
              name="link"
              control={control}
              defaultValue=""
            />
            <label>Alert Type</label>
            <Controller
              name="severity"
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: "error", label: "Error" },
                    { value: "warning", label: "Warning" },
                    { value: "info", label: "Info" },
                    { value: "success", label: "Success" },
                  ]}
                />
              )}
              control={control}
              defaultValue=""
            />

            <input type="submit" disabled={!formState.isValid} />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
