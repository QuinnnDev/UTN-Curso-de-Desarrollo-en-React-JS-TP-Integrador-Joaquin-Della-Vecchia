import { getContactList } from "../services/contacts";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { ContactContext } from "../context/ContactContext";

function useContacts() {
  const [contacts, setContacts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setSelectedContact, selectedContact } = useContext(ContactContext);


  async function loadContacts() {
    /*
    try {
      setError(null);
      setLoading(true);
      const response = await getContactList();
      setContacts(response);
    } catch (error) {
      console.error("Obtener la lista de contactos de firestore fallo", error);
    } finally {
      setLoading(false);
    }
      */
  }

  //controla la cantidad de veces que se ejecuta una funcionalidad
  useEffect(() => {
    //efecto
    loadContacts();
  }, []);


  function selectContact(contact) {
    setSelectedContact(contact);
  }


  return { selectContact, contacts, loading, error };
}

export { useContacts };