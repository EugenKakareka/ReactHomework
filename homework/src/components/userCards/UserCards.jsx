import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import UserCard from "./UserCard";


const UserCards = () => {
  const { searchUsers } = useSelector((state) => state.users)
  return (
    <>
      {searchUsers.length ? (
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} sx={{p:2}}>
          {searchUsers.map((user, index) => (
            <UserCard user={user} key={index}/>
          ))}
        </Box>
      ) : (
        <Typography component="p">User is not found</Typography>
      )}
    </>
  );
};

export default UserCards;
