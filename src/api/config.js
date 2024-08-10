import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCTD2-jESo86VRXZkxkYhhcuGPvFFRAbaI',
	authDomain: 'tcl-74-smart-shopping-list.firebaseapp.com',
	projectId: 'tcl-74-smart-shopping-list',
	storageBucket: 'tcl-74-smart-shopping-list.appspot.com',
	messagingSenderId: '169621298981',
	appId: '1:169621298981:web:6ac16e5308e8b7aa9e44cc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
