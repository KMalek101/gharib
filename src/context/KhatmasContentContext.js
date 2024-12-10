"use client";
import { createContext, useContext, useState } from "react";

const KhatmasContentContext = createContext();

export const useKhatmasContent = () => useContext(KhatmasContentContext);

export const KhatmasContentProvider = ({ children }) => {

  const [name, setName] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [timeLeft, setTimeLeft] = useState("");
  const [status, setStatus] = useState("");
  const [personalProgress, setPersonalProgress] = useState(0);

  const updateKhatmasContent = (newData) => {
    setName(newData.name ?? name);
    setPercentage(newData.percentage ?? percentage); 
    setTimeLeft(newData.timeLeft ?? timeLeft);
    setStatus(newData.status ?? status);
    setPersonalProgress(newData.personalProgress ?? personalProgress);
  };
  

  return (
    <KhatmasContentContext.Provider
      value={{
        name,
        percentage,
        timeLeft,
        status,
        personalProgress,
        updateKhatmasContent,
      }}
    >
      {children}
    </KhatmasContentContext.Provider>
  );
};
