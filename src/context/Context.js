import React, { useState, useEffect } from "react";
import { fetchData } from "../fetch/fetchData";

export const GlobalContext = React.createContext();

export const ContextAPI = ({ children }) => {
  const [data, setData] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetchData().then((result) => {
      setData(result.slice(0, 10));
    });
  }, []);

  const removeTask = (id) => {
    setData(() => {
      return data.filter((p) => p.id !== id);
    });
  };

  return (
    <GlobalContext.Provider
      value={{ setIsLoggedIn, removeTask, data, isLoggedIn }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
