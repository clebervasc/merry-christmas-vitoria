import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Snowfall from "react-snowfall";

import './index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Snowfall snowflakeCount={50} />
  </StrictMode>
);
