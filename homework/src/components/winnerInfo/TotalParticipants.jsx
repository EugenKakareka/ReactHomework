import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const TotalParticipant = () => {
  const users = useSelector((state) => state.users.users);

  return <Typography>Total participant:{users.length}</Typography>;
};

export default TotalParticipant;
