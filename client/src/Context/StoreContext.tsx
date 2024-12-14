import React, { createContext, useState, ReactNode, useContext } from "react";

// Define the context value type
interface AppContextType {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const contextValues = {
    showMenu,
    setShowMenu,
  };

  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
