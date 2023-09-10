import React, { createContext, useContext, useState } from "react";

const BookingContext = createContext({
  selectedServices: [],
  setSelectedServices: () => {},
});

export const useBookingContext = () => {
  return useContext(BookingContext);
};

export const BookingProvider = ({ children }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  return (
    <BookingContext.Provider value={{ selectedServices, setSelectedServices }}>
      {children}
    </BookingContext.Provider>
  );
};
