import ApiContext from "./ApiContext";

const ApiContextProvider = ({ children }) => {
  return <ApiContext.Provider>{children}</ApiContext.Provider>;
};

export default ApiContextProvider;
