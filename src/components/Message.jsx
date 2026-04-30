import React, { useContext } from "react";
import { selectedContactContext } from "../context/ContactContext";

export default function Message({ message }) {
  const { selectedContact } = useContext(selectedContactContext);

  return (
    <div
      key={message.id}
      className={`message ${
        selectedContact.nroTelefono != message.enviadoPor ? "sent" : "received"
      }`}
    >
      <div className="message-content">
        <p>{message.mensaje}</p>

        <span className="message-time">
          {new Date(message.fecha.seconds * 1000)
            .toLocaleTimeString()
            .slice(0, 5)}
        </span>
      </div>
    </div>
  );
}
