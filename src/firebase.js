
import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCAvn1plOi18WdP2V0JGb2TVEC8AxfHIcg",
    authDomain: "khelcom-beb8f.firebaseapp.com",
    projectId: "khelcom-beb8f",
    storageBucket: "khelcom-beb8f.appspot.com",
    messagingSenderId: "667339844092",
    appId: "1:667339844092:web:69d9630debc62ed54e6a79",
    measurementId: "G-7CLFNPWTR9"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export {auth,db,storage}
