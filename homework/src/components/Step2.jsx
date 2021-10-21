import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import * as yup from "yup";
import { nextForm, prevForm, saveData } from "../actions/actions";
import { useFormStore } from "../context/context";

const schema = yup
  .object({
    city: yup
      .string()
      .matches(/^([^0-9]*)$/, "City name shouldn't contain number")
      .required("City is required field"),
    street: yup.string().required("Street is required field"),
    house: yup.string().required("House is required field"),
  })
  .required();

export function Step2() {
  const [state, dispatch] = useFormStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      city: state.data.city,
      street: state.data.street,
      house: state.data.house,
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (values) => {
    dispatch(nextForm(1));
    dispatch(saveData(values));
  };

  const toPreviousForm = () => {
    dispatch(prevForm(1));
  };

  return (
    <>
      <h1>Step:2</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="city">City</label>
        <ErrorMessage
          errors={errors}
          name="city"
          render={({ message }) => <p>{message}</p>}
        />
        <input
          id="city"
          type="text"
          placeholder="City"
          {...register("city", { required: true, maxLength: 80 })}
        />
        <label htmlFor="street">Streeet</label>
        <ErrorMessage
          errors={errors}
          name="street"
          render={({ message }) => <p>{message}</p>}
        />
        <input
          id="street"
          type="text"
          placeholder="Street"
          {...register("street", { required: true, maxLength: 100 })}
        />
        <label htmlFor="house">House</label>
        <ErrorMessage
          errors={errors}
          name="house"
          render={({ message }) => <p>{message}</p>}
        />
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
