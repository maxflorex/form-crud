import firebaseApp from "../firebase/credentials";
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const db = getFirestore(firebaseApp)

const getAllProducts = async () => {
    
    const productos = [];
    const collectionRef = collection(db, 'productos') 

    const snapshot = await getDocs(collectionRef);
    snapshot.forEach((doc) => {
        productos.push(doc.data())
    })
    return productos;
}
 
export default getAllProducts;