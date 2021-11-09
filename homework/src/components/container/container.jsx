import React from "react";
import Box from "@mui/material/Box";
import SearchUser from "../userCards/SearchUser";
import UserCards from "../userCards/UserCards";
import RegistrationForm from "../registrationForm/RegistrationForm";
import Winner from "../winnerInfo/Winner";

function Container() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Box sx={{ pt: 2 }}>
        <SearchUser />
        <UserCards />
      </Box>
      <Box>
        <RegistrationForm />
        <Winner />
      </Box>
    </Box>
  );
}

export default Container;
