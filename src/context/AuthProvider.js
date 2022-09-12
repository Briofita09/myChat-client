import { useState } from "react";
import AppContext from "./AuthContext.js";

const defaultToken = null;

const AppProvider = ({ children }) => {
  const [token, setToken] = useState(defaultToken);

  return (
    <AppContext.Provider value={{ token, setToken }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
