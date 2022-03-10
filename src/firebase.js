import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAhMS7kYOvNUHu_APuDKq1fEUYFwWemOYg",
  authDomain: "first--project-22f41.firebaseapp.com",
  projectId: "first--project-22f41",
  storageBucket: "first--project-22f41.appspot.com",
  messagingSenderId: "1008088219878",
  appId: "1:1008088219878:web:2e71435a9fa5153dddfb27"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
provider.setCustomParameters({
  auth_type: 'reauthenticate',
  promt: 'select_account'
});

export { db, auth, provider, storage }