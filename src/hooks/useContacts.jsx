import { useContext } from "react";
import { selectedContactContext } from "../context/SelectedContactContext";
import { ContactsContext } from "../context/ContactsContext";
import { WindowStateContext } from "../context/WindowStateContext";

function useContacts() {
  const { setSelectedContact } = useContext(selectedContactContext);
  const { setWindowState } = useContext(WindowStateContext);
  const { contacts, loading, error, refresh } = useContext(ContactsContext);

  function selectContact(contact) {
    setSelectedContact(contact);
    setWindowState("mensajes");
  }

  return { selectContact, contacts, loading, error, refresh };
}

export { useContacts };
