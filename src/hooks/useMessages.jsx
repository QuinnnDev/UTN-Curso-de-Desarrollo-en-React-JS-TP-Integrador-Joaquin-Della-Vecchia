import { getMessagesList, createMessage } from "../services/messages";
import { useContext, useState, useEffect } from "react";
import { selectedContactContext } from "../context/SelectedContactContext";
import { randomMsgResponses } from "../data/randomResponses";

function useMessages() {
  const { selectedContact } = useContext(selectedContactContext);
  const [messages, setMessages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refreshIndex, setRefreshIndex] = useState(0);
  const [refreshTimeoutId, setRefreshTimeoutId] = useState(null);

  async function loadMessages() {
    if (!selectedContact?.nroTelefono) {
      setMessages(null);
      return;
    }

    try {
      setError(null);
      setLoading(true);
      const response = await getMessagesList("1", selectedContact.nroTelefono);
      setMessages(response);
    } catch (error) {
      console.error("Obtener la lista de mensajes de firestore fallo", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMessages();
  }, [selectedContact, refreshIndex]);

  function refresh() {
    setRefreshIndex((current) => current + 1);
  }

  async function sendMessage(messageText) {
    if (!messageText.trim() || !selectedContact?.nroTelefono) {
      return;
    }

    await createMessage("1", selectedContact.nroTelefono, messageText);
    console.log("mensaje enviado:", messageText);
    refresh();

    // limpia otros timeouts o sino se crashea al mandar muchos juntos
    if (refreshTimeoutId) {
      clearTimeout(refreshTimeoutId);
    }

    // a los 3 segs de enviar un msj, se refresca la lsita de msj (para mostrar la respuesta automatica)
    const newTimeoutId = setTimeout(async () => {
      const respuesta =
        randomMsgResponses[
          Math.floor(Math.random() * randomMsgResponses.length)
        ];
      console.log("respuesta automatica:", respuesta);
      await createMessage(selectedContact.nroTelefono, "1", respuesta);
      refresh();
      setRefreshTimeoutId(null);
    }, 3000);
    setRefreshTimeoutId(newTimeoutId);
  }

  return { messages, loading, error, refresh, sendMessage };
}

export { useMessages };
