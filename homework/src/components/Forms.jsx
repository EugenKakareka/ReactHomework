import React from "react";
import { useFormStore } from "../context/context";
import Result from "./Result";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";

const Forms = () => {
  const [state] = useFormStore();
  const Form = () => {
    switch (state.step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Result />;
      default:
        return <Step1 />;
    }
  };

  return (
    <div>
      <Form />
    </div>
  );
};

export default Forms;
