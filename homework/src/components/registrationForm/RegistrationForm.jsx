import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUser } from "../../actions/actions";
import TimerModal from "../timer/TimerModal";

const schema = yup
  .object({
    firstName: yup
      .string()
      .matches(/^([^0-9]*)$/, "First name shouldn't contain number")
      .required("First name is required field"),
    lastName: yup
      .string()
      .matches(/^([^0-9]*)$/, "Last name shouldn't contain number")
      .required("Last name is required field"),
  })
  .required();

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const onSubmit = (data) => {
    const newUser = {
      ...data,
      id: Date.now(),
    };
    dispatch(createUser(newUser));
    setOpen(true);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title">Registration User</h1>
      <TextField
        fullWidth
        type="text"
        label="Enter first name..."
        {...register("firstName")}
        error={!!errors.firstName}
        helperText={errors?.firstName?.message}
      />
      <TextField
        fullWidth
        type="text"
        label="Enter last name..."
        {...register("lastName")}
        error={!!errors.lastName}
        helperText={errors?.lastName?.message}
        sx={{mt:2}}
      />
      <Button fullWidth variant="contained" type="submit" sx={{mt:2}}>
        Register participant
      </Button>
      <TimerModal open={open} setOpen={setOpen} />
    </form>
  );
};

export default RegistrationForm;
