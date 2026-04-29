import { createContext, useState } from "react";


const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {

    const [selectedContact, setSelectedContact] = useState({ name: "Alice", avatar: "https://i.pravatar.cc/300", nroTelefono: "2" });
    const provider_value = {selectedContact, setSelectedContact};

    return (
        <ContactContext.Provider value={provider_value}>
            {children}
        </ContactContext.Provider>
    )
}

export {ContactContext, ContactContextProvider}