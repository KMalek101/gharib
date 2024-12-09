'use client'
import { createContext, useContext, useState } from "react";

export const NameHeaderContext = createContext();

export const NameHeaderProvider = ({ children }) => {
  const [nameHeader, setNameHeader] = useState("");

  const changeNameHeader = (name) => setNameHeader(name);

  return (
    <NameHeaderContext.Provider value={{ nameHeader, changeNameHeader }}>
      {children}
    </NameHeaderContext.Provider>
  );
};

export const useNameHeader = () => useContext(NameHeaderContext);
