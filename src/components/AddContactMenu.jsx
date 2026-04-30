import React, { useState } from "react";
import { useContacts } from "../hooks/useContacts";
import "./AddContactMenu.css";
import avatars from "../data/contactPfp";
import useContactForm from "../hooks/useContactForm";

export default function AddContactMenu() {
    
    const { refresh } = useContacts();

  const avatarOptions = avatars;

  const initialFormState = {
    nombre: "",
    nroTelefono: "",
    avatar: "",
  };

  const { formState, handleSubmit, handleChangeInput, selectPfp } = useContactForm(initialFormState, refresh);


  return (
    <div className="add-contact-menu">
      <form className="add-contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            onChange={handleChangeInput}
            value={formState.nombre}
            placeholder="Ingrese el nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nroTelefono">Número de Teléfono:</label>
          <input
            type="tel"
            name="nroTelefono"
            id="nroTelefono"
            onChange={handleChangeInput}
            value={formState.nroTelefono}
            placeholder="Ingrese el número"
          />
        </div>
        <div className="form-group">
          <label htmlFor="avatar">Avatar:</label>
          <div className="avatar-selection">
            {avatarOptions.map((avatar) => (
              <img
                key={avatar.id}
                className={`selectable-pfp ${
                  formState.avatar === avatar.url ? "selected" : ""
                }`}
                src={avatar.url}
                alt="Avatar"
                onClick={() => selectPfp(avatar.url)}
              />
            ))}
          </div>
        </div>
            {formState.nombre.length === 0 && (<span>Please enter a name</span>)}
            {formState.nroTelefono.length < 10 && (<span>Please enter a valid phone number</span>)}
            {!formState.avatar && (<span>Please select an avatar</span>)}
        <button type="submit" className="submit-btn">
          Añadir Contacto
        </button>
      </form>
    </div>
  );
}
