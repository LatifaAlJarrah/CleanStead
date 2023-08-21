import React, { createContext, useContext, useReducer } from "react";

const initialState = [];

const cleaningOptionsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_OPTION":
      return [...state, action.payload];
    default:
      return state;
  }
};

const CleaningOptionsContext = createContext();

export const CleaningOptionsProvider = ({ children }) => {
  const [cleaningOptions, dispatch] = useReducer(
    cleaningOptionsReducer,
    initialState
  );

  return (
    <CleaningOptionsContext.Provider value={{ cleaningOptions, dispatch }}>
      {children}
    </CleaningOptionsContext.Provider>
  );
};

export const useCleaningOptionsContext = () => {
  return useContext(CleaningOptionsContext);
};
