import "./App.css";
// import { db } from './services/firebase';
import { useEffect } from "react";
import { db } from "./services/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
function App() {
  // caminho da collection
  const usersCollectionRef = collection(db, "acidentes");

  

  

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      const dados = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(dados);
    };

    getUsers();
  }, []);

  return <div className="App">Request</div>;
}

export default App;
