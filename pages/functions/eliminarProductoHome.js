import firebaseApp from "../firebase/credentials";
import { getFirestore, deleteDoc, collection, doc } from "firebase/firestore";

const db = getFirestore(firebaseApp)

export const eliminarProductoHome = async (productos) => {
    const collectionRef = collection(db, 'productos')
    const docuRef = doc(collectionRef, productos.sku)

    const deleted = await deleteDoc(docuRef);
    return deleted;
}