// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)
const analytics = getAnalytics(app);
const storage = getStorage(app)

export {auth,db,storage,analytics}
