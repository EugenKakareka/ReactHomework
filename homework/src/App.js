import React from "react";
import { formReducer, initialState } from "./reducer/formReducer";
import { FormProvider } from "./context/context";
import Forms from "./components/Forms";
import "./App.css";

function App() {
  return (
    <FormProvider formReducer={formReducer} initialState={initialState}>
      <Forms />
    </FormProvider>
  );
}

export default App;