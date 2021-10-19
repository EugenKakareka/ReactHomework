import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
  } = useForm({ resolver: yupResolver(schema) });
  const [, dispatch] = useFormStore();

  const onSubmit = (values) => {
    dispatch(nextForm(1));
    dispatch(saveData(values));
  };
  const toPreviousForm = () => {
    dispatch(prevForm(1));
  };
  return (
    <>
      <h1>Шаг: 4</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="pass">Пароль:</label>
        <input
          id="pass"
          name="password"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <label htmlFor="confPass">Подтвердите пароль:</label>
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
