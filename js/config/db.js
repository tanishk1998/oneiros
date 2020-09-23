// original db config
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

firebase.firestore().settings({
  timestampsInSnapshots: true
});
