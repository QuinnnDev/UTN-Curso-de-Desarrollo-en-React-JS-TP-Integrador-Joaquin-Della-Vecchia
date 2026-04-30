import { createContext, useState } from "react";

const selectedContactContext = createContext();

const SelectedContactContextProvider = ({ children }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const provider_value = { selectedContact, setSelectedContact };

  return (
    <selectedContactContext.Provider value={provider_value}>
      {children}
    </selectedContactContext.Provider>
  );
};

export { selectedContactContext, SelectedContactContextProvider };
