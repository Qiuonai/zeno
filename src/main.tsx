import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";  // <-- Import Tailwind here
import  'swiper/css';
import 'swiper/css/pagination';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
