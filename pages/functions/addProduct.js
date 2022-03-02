import firebaseApp from "../firebase/credentials";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp)

const addProduct = (infoProduct) => {

    const collectionRef = collection(db, 'productos')
    const docRef = doc(collectionRef, infoProduct.sku)
    setDoc(docRef, infoProduct)
}

export default addProduct