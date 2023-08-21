import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider } from "./Context/AuthContext";
// import { GlobalStateProvider } from './pages/BookPage/components/GlobalStateProvider'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      {/* <GlobalStateProvider> */}
        <App />
      {/* </GlobalStateProvider> */}
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
