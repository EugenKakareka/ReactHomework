import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import TotalParticipant from "./TotalParticipants";
import { setWinner } from "../../actions/actions";
import { parseTime } from "../../scripts/parseTime";

const Winner = () => {
  const [showWinner, setShowWinner] = useState(false);
  const dispatch = useDispatch();
  const winner = useSelector((state) => state.users.winner);

  function getWinner() {
    setShowWinner(!showWinner);
    dispatch(setWinner());
  }

  return (
    <Box>
      {showWinner ? (
        <Card>
          <CardContent>
            <Typography component="p">ID:{winner.id}</Typography>
            <Typography component="p">First Name:{winner.firstName}</Typography>
            <Typography component="p">Last Name:{winner.lastName}</Typography>
            <Typography component="p">TIme:{parseTime(winner.time)}</Typography>
          </CardContent>
        </Card>
      ) : (
        <TotalParticipant />
      )}
      <Button onClick={() => getWinner()}>Show Winner</Button>
    </Box>
  );
};

export default Winner;
