import { useReducer } from "react";
import apiReducer from "../../reducers/api/apiReducer";
import ApiContext from "./ApiContext";

const ApiContextProvider = ({ children }) => {
  const [apiState, dispatcher] = useReducer(apiReducer, {
    isLoaded: true,
    hasError: false,
  });
  const data = { apiState, dispatcher };

  return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>;
};

export default ApiContextProvider;
