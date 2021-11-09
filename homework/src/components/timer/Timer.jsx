import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import { parseTime } from "../../scripts/parseTime";
import { addUser, saveTime } from "../../actions/actions";

const Timer = ({ setOpen }) => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let timerID;
    if (timerActive) {
      timerID = setTimeout(setTimer, 10, timer + 10);
    } else {
      clearTimeout(timerID);
    }
  }, [timer, timerActive]);

  function cancel() {
    setTimerActive(false);
    setTimer(0);
    setOpen(false);
  }

  function save() {
    dispatch(saveTime({ time: timer }));
    dispatch(addUser());
    setTimerActive(false);
    setTimer(0);
    setOpen(false);
  }

  return (
    <Box>
      <Typography>{parseTime(timer)}</Typography>
      <Box>
        <Button onClick={() => setTimerActive(true)} disabled={timerActive}>
          Start
        </Button>
        <Button onClick={() => setTimerActive(false)}>Stop</Button>
        <Button onClick={() => setTimer(0)} disabled={timerActive}>
          Reset
        </Button>
      </Box>
      <Box>
        <Button onClick={() => cancel()}>Cancel</Button>
        <Button onClick={() => save()} disabled={!timer}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default Timer;
