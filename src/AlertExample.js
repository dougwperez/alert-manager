import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input } from "@material-ui/core";
import { Input as AntdInput } from "antd";
import "./App.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
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
    <div>
      <Button onClick={handleOpen}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Submit Alert
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
            Create an Alert
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name</label>
            <Controller
              render={({ field }) => <Input {...field} />}
              name="firstName"
              control={control}
              defaultValue=""
              className="materialUIInput"
            />
            <label>First Name</label>
            <Controller
              render={({ field }) => <AntdInput {...field} />}
              name="lastName"
              control={control}
              defaultValue=""
            />
            <label>Ice Cream Preference</label>
            <Controller
              name="iceCreamType"
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: "chocolate", label: "Chocolate" },
                    { value: "strawberry", label: "Strawberry" },
                    { value: "vanilla", label: "Vanilla" },
                  ]}
                />
              )}
              control={control}
              defaultValue=""
            />
            <Controller
              name="Checkbox"
              control={control}
              render={({ field }) => <Checkbox {...field} />}
            />

            <input type="submit" />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
