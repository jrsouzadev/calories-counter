import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCCI1q0Yg9Q1THuwYD3_sNm4r7nLdQs7ts",
    authDomain: "calories-counter-jrtls.firebaseapp.com",
    databaseURL: "https://calories-counter-jrtls-default-rtdb.firebaseio.com",
    projectId: "calories-counter-jrtls",
    storageBucket: "calories-counter-jrtls.appspot.com",
    messagingSenderId: "175991594458",
    appId: "1:175991594458:web:afac31117d3bbe1a3334e3",
    measurementId: "G-38XNPMJVB8"
};

const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)

export { analytics }