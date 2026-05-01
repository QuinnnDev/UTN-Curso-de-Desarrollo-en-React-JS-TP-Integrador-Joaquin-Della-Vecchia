import React, { useContext } from "react";
import ContactsMenu from "../components/ContactsMenu";
import MessagesMenu from "../components/MessagesMenu";
import { selectedContactContext } from "../context/SelectedContactContext";
import HomeMenu from "../components/HomeMenu";
import { WindowStateContext } from "../context/WindowStateContext";
import AddContactMenu from "../components/AddContactMenu";

export const HomeScreen = () => {
  const { selectedContact } = useContext(selectedContactContext);

  // Compute windowState directly from selectedContact
  const { windowState, setWindowState } = useContext(WindowStateContext);

  console.log("windowState", windowState);

  return (
    <div id="home-screen">
      <div id="contacts-section">
        <ContactsMenu />

        <div className="contacts-add-button">
          <button
            className="add-contact-button"
            onClick={() => setWindowState("addContact")}
          >
            Add Contact
          </button>
        </div>
      </div>

      <div id="messages-section">
        {windowState == "home" && <HomeMenu />}
        {windowState == "mensajes" && <MessagesMenu />}
        {windowState == "addContact" && <AddContactMenu />}
      </div>
    </div>
  );
};
