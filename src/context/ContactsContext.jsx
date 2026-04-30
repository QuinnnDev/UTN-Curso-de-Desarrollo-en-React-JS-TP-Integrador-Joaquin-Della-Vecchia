import { createContext, useState, useEffect } from "react";
import { getContactList } from "../services/contacts";

const ContactsContext = createContext();

const ContactsContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function loadContacts() {
    try {
      setError(null);
      setLoading(true);
      const response = await getContactList();
      setContacts(response);
    } catch (error) {
      console.error("Error loading contacts", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  function refresh() {
    loadContacts();
  }

  useEffect(() => {
    loadContacts();
  }, []);

  const provider_value = { contacts, loading, error, refresh, loadContacts };

  return (
    <ContactsContext.Provider value={provider_value}>
      {children}
    </ContactsContext.Provider>
  );
};

export { ContactsContext, ContactsContextProvider };
