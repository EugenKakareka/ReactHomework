import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { nextForm, saveData } from "../reducer/formReducer";
import { useFormStore } from "../context/context";

const schema = yup
    .object({
      firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name shouldn't contain number")
        .required("First name is required field"),
      lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name shouldn't contain number")
        .required("First name is required field"),
      email: yup.string().email().required("Email is required field"),
    })
    .required();

export function Step1() {
  const [state,dispatch] = useFormStore();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({resolver: yupResolver(schema)})

  const onSubmit = (values) => {
    dispatch(nextForm(1));
    dispatch(saveData(values));
  };

  return (
    <>
      <h1>Шаг:1</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Имя</label>
        <input
          id="name"
          type="text"
          placeholder="First name"
          {...register("firstName")}
        />
        
        <label htmlFor="lastName">Фамилия</label>
        <input
          id="lastName"
          type="text"
          placeholder="Last name"
          {...register("lastName")}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          {...register("email")}
        />

        <button type="submit">Next</button>
      </form>
    </>
  );
}
