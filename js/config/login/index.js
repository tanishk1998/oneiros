new Vue({
  el: "#login",
  data: {
    username: "",
    password: "",
    userexists: false,
    disabled: false,
    error: ""
  },
  mounted() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        window.location = "/index.html";
      }
    });
  },
  methods: {
    getArray(array) {
      if (array) {
        const arr = [];
        for (const key in array.docs) {
          arr.push({
            key: array.docs[key].data(),
            id: array.docs[key].id
          });
        }
        return arr;
      }
    },
    login() {
      if (this.username != "" && this.password != "") {
        var self = this;
        self.disabled = true;
        var email;
        firebase
          .firestore()
          .collection("users")
          .where("username", "==", self.username)
          .get()
          .then(
            function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                email = doc.data().email;
              });
              if (!email) {
                self.error = "Invalid Username";
                self.disabled = false;
                return;
              }
              firebase
                .auth()
                .signInWithEmailAndPassword(email, self.password)
                .then(
                  function() {
                    self.error = "Login Successful!";
                    self.disabled = false;
                    setTimeout(() => {
                      window.location = "/eventregistrations";
                    }, 1500);
                  },
                  function(error) {
                    self.error = error.message;
                    self.disabled = false;
                  }
                );
            },
            function(error) {
              self.error = error.message;
              self.disabled = false;
            }
          );
      }
    }
  }
});

document.getElementById("password").onkeypress = e => {
  if (!e) e = window.event;
  var code = e.keyCode;
  if (code === 13) {
    document.getElementById("submit-button").click();
  }
};
