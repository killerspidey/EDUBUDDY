// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnLC7otNGWQDqPtyXMXvmoSWFFEB72gyo",
  authDomain: "edubuddy-auth-3a728.firebaseapp.com",
  projectId: "edubuddy-auth-3a728",
  storageBucket: "edubuddy-auth-3a728.appspot.com",
  messagingSenderId: "386376329757",
  appId: "1:386376329757:web:425200b6f96e9e6f86f4f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const mail = document.getElementById("mail").value;
  const pass = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, mail, pass)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Creating Account...");
      window.location.href ="grand.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
