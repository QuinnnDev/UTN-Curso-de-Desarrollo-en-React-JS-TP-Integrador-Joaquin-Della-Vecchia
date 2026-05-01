import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";

export async function getContactList() {
  //selecciono la coleccion de contactos de mi db
  const collection_selected = collection(db, "contactos");

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
export async function getContactByNroTelefono(nroTelefono) {
  const q = query(
    collection(db, "contactos"),
    where("nroTelefono", "==", nroTelefono)
  );

const snapshot = await getDocs(q);

if (snapshot.empty) {
  return null; // Not found
}

// Since it's unique, get the first (and only) result
const doc = snapshot.docs[0];
return {
  id: doc.id,
  ...doc.data(),
};
}

export async function createContact(avatar, nombre, nroTelefono) {
  const new_contact = {
    avatar,
    nombre,
    nroTelefono,
  };
  const contact_ref = await addDoc(collection(db, "contactos"), new_contact);
  return contact_ref.id;
}
