import React, { useContext } from 'react'
import './ContactsMenu.css'
import useForm from '../hooks/UseForm'
import { useContacts } from '../hooks/useContacts';
import { WindowStateContext } from '../context/WindowStateContext';

export default function ContactsMenu(/*{ contactData }*/) {


  const {selectContact} = useContacts()


  const { contacts, loading, error } = useContacts();


  const contactData = [
    { nombre: "Alice", avatar: "https://i.pravatar.cc/300", nroTelefono: "2" },
    { nombre: "Charlie", avatar: "https://i.pravatar.cc/340", nroTelefono: "3" },
    { nombre: "David", avatar: "https://i.pravatar.cc/350", nroTelefono: "4" },
    { nombre: "Eve", avatar: "https://i.pravatar.cc/310", nroTelefono: "5" },
    { nombre: "Frank", avatar: "https://i.pravatar.cc/200", nroTelefono: "6" },
    { nombre: "Grace", avatar: "https://i.pravatar.cc/400", nroTelefono: "7" },
    { nombre: "Heidi", avatar: "https://i.pravatar.cc/320", nroTelefono: "8" },
    { nombre: "Ivan", avatar: "https://i.pravatar.cc/360", nroTelefono: "9" },
    { nombre: "Judy", avatar: "https://i.pravatar.cc/330", nroTelefono: "10" },
    { nombre: "Karl", avatar: "https://i.pravatar.cc/370", nroTelefono: "11" },
  ];


  const initialFormState = {
    contactSearch: "",
  };

  const { handleSubmit, handleChangeInput, formState } =
    useForm(initialFormState);

  return (
    <div className="contacts-menu">
      <div className="contacts-upper-bar">
        Contacts
        <input
          type="text"
          name="text"
          className="contact-searchbar"
          placeholder="Search contacts..."
        />
      </div>

      <div className="contact-list">
        
        {!loading && contacts &&
          contacts.map((contact, index) => (
            <div key={index} className="contact-item" onClick={() => selectContact(contact)}>
              <img src={contact.avatar} alt={contact.nombre} />
              <div>
                <strong>{contact.nombre}</strong>
                <p>{contact.nroTelefono}</p>
              </div>
            </div>
          ))}
      </div>



    </div>
  );
}
