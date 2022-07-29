import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input } from "@material-ui/core";
import { Input as AntdInput } from "antd";
import "../App.css";

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

export default function AlertExample() {
  const [open, setOpen] = React.useState(false);
  const { control, handleSubmit } = useForm();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
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
            <label>Text</label>
            <Controller
              render={({ field }) => <AntdInput {...field} />}
              name="Text"
              control={control}
              defaultValue=""
            />
            <label>Link</label>
            <Controller
              render={({ field }) => <AntdInput {...field} />}
              name="link"
              control={control}
              defaultValue=""
            />
            <label>Time Limit</label>
            <Controller
              render={({ field }) => <AntdInput {...field} />}
              name="timeLimit"
              control={control}
              defaultValue=""
            />
            <label>Alert Type</label>
            <Controller
              name="iceCreamType"
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
            {/* <Controller
              name="Checkbox"
              control={control}
              render={({ field }) => <Checkbox {...field} />}
            /> */}

            <input type="submit" />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
