var config = {
  apiKey: "AIzaSyAEZdHK98COcRt9hzxbICAPeSpXOyn0vA4",
  authDomain: "oneiros-2018.firebaseapp.com",
  databaseURL: "https://oneiros-2018.firebaseio.com",
  projectId: "oneiros-2018",
  storageBucket: "oneiros-2018.appspot.com",
  messagingSenderId: "358484877394"
};
const app = firebase.initializeApp(config);
const firestore = firebase.firestore();
firestore.settings({
  timestampsInSnapshots: true
});
const auth = firebase.auth();
auth.onAuthStateChanged(function(user) {
  if (!user) {
    window.location.href = "/funzone";
  }
});

$("#logout-funzone").click(function() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      console.log("Signed out");
    });
});
