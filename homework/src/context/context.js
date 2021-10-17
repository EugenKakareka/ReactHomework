import React, { useContext, useReducer } from "react";

const Context = React.createContext();

export const FormProvider = ({ children, formReducer, initialState }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const useFormStore = () => useContext(Context);
