"use client";
import { createContext, useContext, useState } from "react";

// Create the context
const KhatmasContentContext = createContext();

// Custom hook to access context
export const useKhatmasContent = () => useContext(KhatmasContentContext);

// Provider to wrap the layout and provide the context
export const KhatmasContentProvider = ({ children }) => {
  // State for each of the variables
  const [name, setName] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [timeLeft, setTimeLeft] = useState("");
  const [status, setStatus] = useState("");
  const [personalProgress, setPersonalProgress] = useState(0);

  // Function to update all the context values at once
  const updateKhatmasContent = (newData) => {
    console.log(newData);
    setName(newData.name || name);
    setPercentage(newData.percentage || percentage);
    setTimeLeft(newData.timeLeft || timeLeft);
    setStatus(newData.status || status);
    setPersonalProgress(newData.personalProgress || personalProgress);
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
