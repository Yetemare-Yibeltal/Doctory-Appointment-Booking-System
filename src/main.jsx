import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./Context/AppContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  {/* appcontextprovider is used to make our <App/> context data available  to every component in our application. */}
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
