import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HelmetProvider } from 'react-helmet-async';
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <HelmetProvider>
    <App />
  </HelmetProvider>
</React.StrictMode>,
);
