import React from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { searchUser } from "../../actions/actions";

const SearchUser = () => {
  const dispatch = useDispatch();

  const searchByNameAndId = (event) => {
    dispatch(searchUser(event.target.value));
  };

  return (
    <TextField
      fullWidth
      size="small"
      type="search"
      onChange={searchByNameAndId}
      label="Enter user name or ID"
    />
  );
};

export default SearchUser;
