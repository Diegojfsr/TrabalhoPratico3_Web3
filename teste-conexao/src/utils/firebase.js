import { initializeApp } from 'firebase/app' // no compat for new SDK
import { getDatabase, ref } from 'firebase/database'

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa5Ut1eYbfx04ynoPHBFcrsvWBJPamwAE",
  authDomain: "teste-conexao-28960.firebaseapp.com",
  projectId: "teste-conexao-28960",
  storageBucket: "teste-conexao-28960.appspot.com",
  messagingSenderId: "35487029303",
  appId: "1:35487029303:web:0028a2dd736a9d8c60c7b2"
};

// Initialize Firebase
//const app2 = initializeApp(firebaseConfig);
//Exports
//export { app2 };


const app = initializeApp(firebaseConfig)

const database = getDatabase(app)

export const todosRef = ref(database, "todos")

