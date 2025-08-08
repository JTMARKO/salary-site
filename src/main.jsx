import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import SalaryCoinApp from "./App2.jsx";
import SalaryCoinApp from "./App3.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SalaryCoinApp />
  </StrictMode>,
);
