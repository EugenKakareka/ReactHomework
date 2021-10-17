import React from "react";
import { useForm } from "react-hook-form";
import { nextForm, prevForm, saveData } from "../reducer/formReducer";
import { useFormStore } from "../context/context";

export function Step3() {
  const [state, dispatch] = useFormStore();
  const { handleSubmit } = useForm();
  const onSubmit = () => {
    dispatch(nextForm(1));
    dispatch(saveData({step3:'step3'}))
  };
  const toPreviousForm = () => {
    dispatch(prevForm(1));
  };
  return (
    <>
      <h1>Шаг: 3</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" name="" id="" />

        <button type="button" onClick={toPreviousForm}>
          Previous
        </button>
        <button type="submit">Next</button>
      </form>
    </>
  );
}
