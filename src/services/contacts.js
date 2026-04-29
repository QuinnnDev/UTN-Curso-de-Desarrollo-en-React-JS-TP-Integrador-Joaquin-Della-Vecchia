import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

export async function getContactList() {
  //selecciono la coleccion de contactos de mi db
  const collection_selected = collection(db, "mensajes");

  //obtengo las referencias de los documentos de la coleccion
  const snapshot = await getDocs(collection_selected);
  const contactos = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(), //trae la info de cada documento
    };
  });
  console.log(contactos);
  return contactos;
}

/** Obtener un contacto por id usando FIRESTORE */
export async function getContactById(id) {
  const doc_to_find = doc(db, "contactos", id);
  const snapshot = await getDoc(doc_to_find);

  if (!snapshot.exists()) {
    return null;
  }
  return (contact_found = {
    id: snapshot.id,
    ...snapshot.data(),
  });
}

export async function createContact(avatar, nombre, nroTelefono) {
  const new_contact = {
    avatar,
    nombre,
    nroTelefono,
  };
  const contact_ref = await addDoc(collection(db, "contactos", new_contact));
  return contact_ref.id;
}
