import {initializeApp} from 'firebase/app';
import {collection, getDocs, getFirestore, setDoc, doc} from 'firebase/firestore/lite';
import constants from "../constants";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSVzxcr5ZiDT_aARw7-ukOmgY9n51XlGE",
    authDomain: "digital-education-9f0cb.firebaseapp.com",
    projectId: "digital-education-9f0cb",
    storageBucket: "digital-education-9f0cb.appspot.com",
    messagingSenderId: "831809795139",
    appId: "1:831809795139:web:0e803ff142b7d091f290f6"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getResults() {
    const resultsCol = collection(db, "results");
    const resultsSnapshot = await getDocs(resultsCol);
    return resultsSnapshot.docs.map(doc => doc.get("answer_1"));
}

async function addResults(answer) {
    const resultsCol = collection(db, "results");
    await setDoc(doc(resultsCol), {
        answer_1: answer
    });
}


async function logScreenChange(user, group, timestamp, timespent, currentactivity, nextactivity) {
    const resultsCol = collection(db, "logs");
    // i have no idea why, but reomving this line will cause the logging to fail
    console.log(user)
    await setDoc(doc(resultsCol), {
        user: user,
        cause: 'screenChange',
        part: group,
        timestamp: timestamp,
        timespent: timespent,
        currentactivity: currentactivity,
        nextactivity: nextactivity
    });
}

async function logUser(username, age, uuid, language) {
    const resultsCol = collection(db, "users");
    await setDoc(doc(resultsCol), {
        username: username,
        age: age,
        uuid: uuid,
        language: language,
        time: new Date().getTime()

    });
}

async function logFeedback(uuid, slide, message, part) {
    const resultsCol = collection(db, "feedbacks");
    await setDoc(doc(resultsCol), {
        uuid: uuid,
        slide: slide,
        message: message,
        part: part,
        time: new Date().getTime()

    });
}

async function logBoard(uuid, part, slide, gridString, width, height, id) {
    const resultsCol = collection(db, "boards");
    await setDoc(doc(resultsCol), {
        uuid: uuid,
        part: part,
        slide: slide,
        gridString: gridString,
        width: width,
        height: height,
        id:id,
        time: new Date().getTime()
    });
}

export {getResults, addResults, logScreenChange, logUser, logFeedback, logBoard};