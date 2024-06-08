// menuContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the context data
interface MenuContextType {
  isOpen: boolean;
  toggleMenu: () => void;
}

// Create the context with initial values
const MenuContext = createContext<MenuContextType>({
  isOpen: false,
  toggleMenu: () => {}, // Default toggleMenu function
});

// Custom hook to access the menu context
export const useMenu = () => useContext(MenuContext);

// Props for the MenuProvider component
interface MenuProviderProps {
  children: ReactNode;
}

// Provider component to manage the menu state
export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  // State to manage the menu open/close status
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu status
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen); // Log the current state after toggling
  };

  // Provide the menu state and toggle function to children components
  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
