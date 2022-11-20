import {initializeApp} from 'firebase/app';
import {collection, getDocs, getFirestore} from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhDcEZssnj25iiwCIAhOvjpjGx1Xouj58",
    authDomain: "digital-education-b7441.firebaseapp.com",
    projectId: "digital-education-b7441",
    storageBucket: "digital-education-b7441.appspot.com",
    messagingSenderId: "676031521246",
    appId: "1:676031521246:web:c2527e53d12bb097777d4f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getResults() {
    const resultsCol = collection(db, 'results');
    const resultsSnapshot = await getDocs(resultsCol);
    return resultsSnapshot.docs.map(doc => doc.get("answer_1"));
}

export default getResults;

