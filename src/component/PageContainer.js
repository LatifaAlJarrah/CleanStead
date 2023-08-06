import React from "react";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const PageContainer = ({ children }) => (
  <body
    className="xl:px-36 lg:px-32 md:px-20 sm:px-9 xs:px-7 pt-4">
    <div
      className="w-full"
    >
      <Header />

      {children}

      <Footer />         
    </div>
  </body>
);
