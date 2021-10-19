import React from "react";
import { useForm } from "react-hook-form";
import { nextForm, prevForm, addFile } from "../actions/actions";
import { useFormStore } from "../context/context";

export function Step3() {
  const [, dispatch] = useFormStore();
  const { register,handleSubmit } = useForm();
  const onSubmit = (file) => {
    dispatch(nextForm(1));
    dispatch(addFile(file))
  };
  const toPreviousForm = () => {
    dispatch(prevForm(1));
  };

  return (
    <>
      <h1>Шаг: 3</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" name="upload"{...register("upload")}/>

        <button type="button" onClick={toPreviousForm}>Previous</button>
        <button type="submit">Next</button>
      </form>
    </>
  );
}
