import React from "react";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const PageContainer = ({ children }) => (
  <body
    className="xl:px-36 lg:px-32 md:px-20 sm:px-9 xs:px-7 pt-4">
    <div
      className="w-full"
    >
      <header>
        <Navbar />
      </header>

      <main>
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  </body>
);
