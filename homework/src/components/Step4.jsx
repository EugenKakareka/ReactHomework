import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import * as yup from "yup";
import { nextForm, prevForm, saveData } from "../actions/actions";
import { useFormStore } from "../context/context";

const schema = yup
  .object({
    password: yup
      .string()
      .max(30)
      .min(4, "To short")
      .required("The password is required field"),
  })
  .required();

export function Step4() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [, dispatch] = useFormStore();

  const onSubmit = (values) => {
    if (values.password !== values.confPassword) {
      return alert("Confirm password must be the same");
    }
    dispatch(nextForm(1));
    dispatch(saveData(values));
  };
  const toPreviousForm = () => {
    dispatch(prevForm(1));
  };
  return (
    <>
      <h1>Step: 4</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="pass">Password:</label>
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <p>{message}</p>}
        />
        <input
          id="pass"
          name="password"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <label htmlFor="confPass">Confirm password:</label>

        <input
          id="confPass"
          name="confPassword"
          type="password"
          placeholder="Confirm password"
          {...register("confPassword")}
        />

        <button type="button" onClick={toPreviousForm}>
          Previous
        </button>
        <button type="submit">Next</button>
      </form>
    </>
  );
}
