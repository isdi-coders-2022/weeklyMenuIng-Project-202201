import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "@fontsource/montserrat";
import { BrowserRouter } from "react-router-dom";
import RecipesContextProvider from "./store/contexts/RecipesContext/RecipesContextProvider";
import APIContextProvider from "./store/contexts/ApiContext/ApiContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <APIContextProvider>
      <RecipesContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecipesContextProvider>
    </APIContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
