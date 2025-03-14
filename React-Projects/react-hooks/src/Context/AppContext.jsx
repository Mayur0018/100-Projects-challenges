import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const txtValue = "Mayur Is The Best Corder";
  <AppContext.Provider value={txtValue}>{props.children}</AppContext.Provider>;
};

export default ContextProvider;
