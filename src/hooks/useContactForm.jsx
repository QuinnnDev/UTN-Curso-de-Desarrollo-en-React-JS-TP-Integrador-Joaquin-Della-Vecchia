import { useState } from "react";
import { createContact, getContactByNroTelefono } from "../services/contacts";

function useContactForm(initialFormState, onAddContact) {
  const [formState, setFormState] = useState(initialFormState);

  function selectPfp(avatarUrl) {
    setFormState((currentValue) => ({
      ...currentValue,
      avatar: avatarUrl,
    }));
  }

  async function handleSubmit(evento) {
    evento.preventDefault();

    if (
      !formState.nombre.trim() ||
      !formState.nroTelefono.trim() ||
      !formState.avatar
    ) {
      alert("Recuerda llenar todos los campos antes de añadir un contacto");
      return;
    }
    if (formState.nroTelefono.trim().length < 10 || isNaN(parseInt(formState.nroTelefono))) 
      {
      alert("Por favor ingresa un número de teléfono válido");
      return;
    }

    console.log("Checking if contact already exists...");
    const existingContact = await getContactByNroTelefono(formState.nroTelefono);
    if (existingContact) {
      alert("Ya existe un contacto con ese número de teléfono. Por favor ingresa un número diferente.");
      return;
    }

    await createContact(
      formState.avatar,
      formState.nombre,
      formState.nroTelefono
    );
    onAddContact();
    alert("Contacto añadido exitosamente");
    setFormState(initialFormState);
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

  return {
    selectPfp,
    formState,
    handleSubmit,
    handleChangeInput,
  };
}

export default useContactForm;
