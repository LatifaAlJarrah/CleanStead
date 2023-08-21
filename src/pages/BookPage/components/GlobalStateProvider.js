import React, { createContext, useReducer } from "react";

const GlobalStateContext = createContext();

const initialState = {
  selectedOption: null,
  selectedDate: null,
  userInformation: {
    name: "",
    phone: "",
    address: "",
    detailedAddress: "",
  },
};

const globalStateReducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_OPTION":
      return { ...state, selectedOption: action.payload };
    case "SET_SELECTED_DATE":
      return { ...state, selectedDate: action.payload };
    case "SET_USER_INFORMATION":
      return { ...state, userInformation: action.payload };
    default:
      return state;
  }
};

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateProvider, GlobalStateContext };
