import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "@fontsource/montserrat";
import { BrowserRouter } from "react-router-dom";
import RecipesContextProvider from "./store/contexts/RecipesContext/RecipesContextProvider";
import ApiContextProvider from "./store/contexts/ApiContext/ApiContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <ApiContextProvider>
      <RecipesContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecipesContextProvider>
    </ApiContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
