import { useReducer } from "react";
import apiReducer from "../../reducers/api/apiReducer";
import ApiContext from "./ApiContext";

const ApiContextProvider = ({ children }) => {
  const [apiState, dispatch] = useReducer(apiReducer, {
    isLoaded: false,
    hasError: false,
    errorMsg: "",
  });

  return (
    <ApiContext.Provider value={{ apiState, dispatch }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
