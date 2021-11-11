import firebaseConfig from "./Firebase.Config";

import { initializeApp } from "firebase/app";

const initializeFirebase = () => {
    initializeApp(firebaseConfig)
}

export default initializeFirebase;