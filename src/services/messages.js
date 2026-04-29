import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";


//obtiene la lista de mensajes enviados a X y recibidos por X. Luego los une y los ordena cronologicamente para formar el chat
export async function getMessagesList(userId, contactId) {
  const query1 = query(
    collection(db, "mensajes"),
    where("enviadoPor", "==", userId),
    where("recibidoPor", "==", contactId),
    orderBy("fecha", "desc")
  );

  const query2 = query(
    collection(db, "mensajes"),
    where("enviadoPor", "==", contactId),
    where("recibidoPor", "==", userId),
    orderBy("fecha", "desc")
  );

  const [snapshot1, snapshot2] = await Promise.all([
    getDocs(query1),
    getDocs(query2),
  ]);

  const allMessages = [
    ...snapshot1.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
    ...snapshot2.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
  ].sort((a, b) => a.fecha - b.fecha); 

  return allMessages; 
}

/** Crear un mensaje */

export async function createMessage(userId, contactId, messageText) {
  const new_message = {
    enviadoPor: userId,
    recibidoPor: contactId,
    mensaje: messageText,
    fecha: new Date(),
  };
  const message_ref = await addDoc(collection(db, "mensajes"), new_message);
  return message_ref.id;
}

