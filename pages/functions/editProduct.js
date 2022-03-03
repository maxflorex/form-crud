import firebaseApp from "../firebase/credentials";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";


function añadirProducto(infoProducto, autor) {
  const db = getFirestore(firebaseApp);
  const collectionRef = collection(db, "productos");
  const docRef = doc(collectionRef, infoProducto.sku);
  setDoc(docRef, infoProducto);

}

export default añadirProducto;