import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { nextForm, prevForm, saveData } from "../reducer/formReducer";
import { useFormStore } from "../context/context";

const schema = yup
  .object({
    city: yup.string().required(),
    street: yup.string().required(),
    house: yup.string().required(),
  })
  .required();

export function Step2() {
  const [state, dispatch] = useFormStore();
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (values) => {
    dispatch(nextForm(1));
    dispatch(saveData(values));
  };

  const toPreviousForm = () => {
    dispatch(prevForm(1));
  };

  return (
    <>
      <h1>Шаг:2</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="city">Город</label>
        <input
          id="city"
          type="text"
          placeholder="City"
          {...register("city", { required: true, maxLength: 80 })}
        />
        <label htmlFor="street">Улица</label>
        <input
          id="street"
          type="text"
          placeholder="Street"
          {...register("street", { required: true, maxLength: 100 })}
        />
        <label htmlFor="house">Дом</label>
        <input
          id="house"
          type="text"
          placeholder="House"
          {...register("house", { required: true, maxLength: 5 })}
        />

        <button type="button" onClick={toPreviousForm}>
          Previous
        </button>
        <button type="submit">Next</button>
      </form>
    </>
  );
}
