import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { nextForm, saveData } from "../actions/actions";
import { useFormStore } from "../context/context";

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
    email: yup.string().email().required("Email is required field"),
  })
  .required();

export function Step1() {
  const [state, dispatch] = useFormStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: state.data.firstName,
      lastName: state.data.lastName,
      email: state.data.email,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    dispatch(nextForm(1));
    dispatch(saveData(values));
  };

  return (
    <>
      <h1>Step:1</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name</label>
        <ErrorMessage
          errors={errors}
          name="firstName"
          render={({ message }) => <p>{message}</p>}
        />
        <input
          id="firstName"
          type="text"
          name="firstName"
          {...register("firstName")}
        />

        <label htmlFor="lastName">Last Name</label>
        <ErrorMessage
          errors={errors}
          name="lastName"
          render={({ message }) => <p>{message}</p>}
        />
        <input
          id="lastName"
          name="lastName"
          type="text"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
          {...register("lastName")}
        />

        <label htmlFor="email">Email</label>
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <p>{message}</p>}
        />
        <input
          id="email"
          name="email"
          type="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
          {...register("email")}
        />

        <button type="submit">Next</button>
      </form>
    </>
  );
}
