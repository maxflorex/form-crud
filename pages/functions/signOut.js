import firebaseApp from "../firebase/credentials";
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(firebaseApp);

const cerrarSesion = () => {
    signOut(auth)
}

export default cerrarSesion