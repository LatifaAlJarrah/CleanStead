import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  options: [],
};

const cleaningOptionsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_OPTION":
      const existingOptionIndex = state.options.findIndex(
        (option) => option.id === action.payload.id
      );

      if (existingOptionIndex !== -1) {
        const updatedOptions = [...state.options];
        updatedOptions[existingOptionIndex] = action.payload;
        return { ...state, options: updatedOptions };
      } else {
        return { ...state, options: [...state.options, action.payload] };
      }

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
