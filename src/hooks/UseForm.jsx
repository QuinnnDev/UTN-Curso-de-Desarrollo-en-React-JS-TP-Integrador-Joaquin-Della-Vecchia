import { useState } from "react";

function useForm(initialFormState, onSendMessage) {
  const [formState, setFormState] = useState(initialFormState);

  function handleSubmit(evento) {
    evento.preventDefault();
  }

  function handleChangeInput(evento) {
    const field_name = evento.target.name;
    const field_value = evento.target.value;
    setFormState((currentValue) => {
      return {
        ...currentValue,
        [field_name]: field_value,
      };
    });
  }

  async function handleSendMessage() {
    if (!formState.newMessage.trim()) {
      return;
    }

    await onSendMessage(formState.newMessage);
    setFormState(initialFormState);

  }

  return {
    handleSendMessage,
    formState,
    handleSubmit,
    handleChangeInput,
  };
}

export default useForm;
