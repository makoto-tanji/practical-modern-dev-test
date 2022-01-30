import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
    apiKey: "AIzaSyDlFO3-7ZNTd3UKS5By81eXoM-eEhI0fvs",
    authDomain: "practical-modern-dev.firebaseapp.com",
    projectId: "practical-modern-dev",
    storageBucket: "practical-modern-dev.appspot.com",
    messagingSenderId: "677131074245",
    appId: "1:677131074245:web:8ace77f3d03062cf040eac",
    measurementId: "G-V7NLYZF6KB"
    }
  )
}
  
export default firebase