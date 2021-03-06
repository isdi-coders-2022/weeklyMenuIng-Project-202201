import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "@fontsource/montserrat";
import { BrowserRouter } from "react-router-dom";
import MyRecipesContextProvider from "./store/contexts/MyRecipesContext/MyRecipesContextProvider";
import RecipesContextProvider from "./store/contexts/RecipesContext/RecipesContextProvider";
import APIContextProvider from "./store/contexts/ApiContext/ApiContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <APIContextProvider>
      <MyRecipesContextProvider>
        <RecipesContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RecipesContextProvider>
      </MyRecipesContextProvider>
    </APIContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
