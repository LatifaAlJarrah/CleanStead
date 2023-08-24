import React, { createContext, useContext, useState } from "react";

const TotalPriceContext = createContext();

export const TotalPriceProvider = ({ children }) => {
  const [service1Total, setService1Total] = useState(0);
  const [service2Total, setService2Total] = useState(0);

  return (
    <TotalPriceContext.Provider
      value={{
        service1Total,
        setService1Total,
        service2Total,
        setService2Total,
      }}
    >
      {children}
    </TotalPriceContext.Provider>
  );
};

export const useTotalPriceContext = () => useContext(TotalPriceContext);
