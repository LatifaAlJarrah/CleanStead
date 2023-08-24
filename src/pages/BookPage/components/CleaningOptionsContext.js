import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  options: [],
  totalPrice: 0,
};

const cleaningOptionsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_OPTION":
      const newOptions = [...(state.options ?? []), action.payload];
      // const newTotalPrice = newOptions.reduce(
      //   (total, option) =>
      //     total +
      //     (option.services?.service1?.price || 0) +
      //     (option.services?.service2?.price || 0),
      //   0
      // );
      return { ...state, options: newOptions};
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
