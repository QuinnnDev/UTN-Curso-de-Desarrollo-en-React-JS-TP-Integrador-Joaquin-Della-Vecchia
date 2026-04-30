import React, { useContext, useRef, useEffect } from "react";
import "./MessagesMenu.css";
import Message from "./Message";
import useForm from "../hooks/UseForm";
import { useMessages } from "../hooks/useMessages";
import { selectedContactContext } from "../context/ContactContext";

export default function MessagesMenu() {
  const messagesEndRef = useRef(null);
  const { messages, loading, error, sendMessage } = useMessages();

  const initialFormState = {
    newMessage: "",
  };

  const { selectedContact } = useContext(selectedContactContext);
  const { handleSendMessage, handleSubmit, handleChangeInput, formState } =
    useForm(initialFormState, sendMessage);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "instant" });
  }, [messages]);

  return (
    <div className="messages-menu">
      {/* Header */}

      <div className="messages-header">
        <img
          src={selectedContact?.avatar}
          alt={selectedContact?.nombre}
          className="contact-avatar"
        />
        <div className="contact-info">{<h3>{selectedContact?.nombre}</h3>}</div>
      </div>

      {/* Messages Area */}

      <div className="messages-container">
        {!loading &&
          messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}

      <div className="message-input-container">
        <input
          type="text"
          name="newMessage"
          value={formState.newMessage}
          onChange={handleChangeInput}
          placeholder="Type a message..."
          className="message-input"
        />

        <button onClick={handleSendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
}
