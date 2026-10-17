import { createContext } from "react";
import { doctors } from "../assets/assets";
//  Create a new context instance
export const AppContext = createContext();
// wrap your app with contextProvider
const AppContextProvider = (props) => {
  const value = {
    doctors
  };
  return (
    <AppContext.Provider value={value}>
      {/* Render child components */}
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
