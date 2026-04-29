// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRcrvwDcErBjnF7Pgjelk2nx8PMZ3rWHQ",
  authDomain: "trabajo-integrador-diplo-4c467.firebaseapp.com",
  projectId: "trabajo-integrador-diplo-4c467",
  storageBucket: "trabajo-integrador-diplo-4c467.firebasestorage.app",
  messagingSenderId: "653728186265",
  appId: "1:653728186265:web:86eb2f5f44a155bb3d9d08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
export default app;
