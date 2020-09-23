new Vue({
  el: "#campus-ambassador-login",
  data: {
    name: "",
    username: "",
    email: "",
    wpno: "",
    pno: "",
    regno: "",
    password: "",
    repassword: "",
    college: "",
    emailAuth: "",
    passwordAuth: "",
    usernameAuth: ""
  },
  methods: {
    random_code: function() {
      var start = new Date().getTime();
      var end = start.toString(8).substr(10);
      var random = Math.random()
        .toString(36)
        .substr(10);
      var res = random.concat(end);
      return res;
    },
    login() {
      var self = this;
      firebase
        .firestore()
        .collection("campus_ambassadors")
        .where("username", "==", this.usernameAuth)
        .get()
        .then(function(doc) {
          doc.forEach(function(child) {
            this.emailAuth = child.data().email;
          });
          firebase
            .auth()
            .signInWithEmailAndPassword(this.emailAuth, self.passwordAuth)
            .then(function(user) {
              // window.location='./pages/profile.html';
            });
        });
    }
  }
});
