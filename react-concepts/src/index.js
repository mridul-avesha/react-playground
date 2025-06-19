import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import S2 from "./section2"
import S3 from "./section3"
import S4 from "./section4"

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <S2 />
    <S3 />
    <S4 />
  </StrictMode>
);