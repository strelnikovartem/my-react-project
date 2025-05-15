import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Alert from "./components/Alert";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Alert />
  </React.StrictMode>
);
