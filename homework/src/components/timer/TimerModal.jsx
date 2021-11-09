import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Timer from "./Timer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

const TimerModal = ({ open, setOpen }) => {
  const newUser = useSelector((state) => state.users.newUser);

  return (
    <div>
      <Modal open={open}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            {newUser.firstName} {newUser.lastName}
          </Typography>
          <Typography sx={{ mt: 2 }}>ID:{newUser.id}</Typography>
          <Timer setOpen={setOpen} />
        </Box>
      </Modal>
    </div>
  );
};

export default TimerModal;
