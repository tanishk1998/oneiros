new Vue({
  el: "#campus-ambassador-register",
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
    validate: function() {
      if (
        this.repassword != this.password ||
        this.name == "" ||
        this.email == "" ||
        this.wpno == "" ||
        this.pno == "" ||
        (this.password == "" && this.college == "")
      ) {
        if (this.name == "") {
          alert("Name is empty");
        }
        if (this.username == "") {
          alert("Username is empty");
        }
        if (this.email == "") {
          alert("Email is empty");
        }
        if (this.wpno == "") {
          alert("Whatsapp Number is empty");
        }
        if (this.pno == "") {
          alert("Phone Number is empty");
        }
        if (this.password == "") {
          alert("Password is empty");
        }
        if (this.repassword == "") {
          alert("Password is empty");
        }
        if (this.college == "") {
          alert("College is empty");
        }
        if (this.repassword != this.password) {
          alert("Passwords do not match.");
        }
        return false;
      }
      firebase
        .firestore()
        .collection("campus_ambassadors")
        .where("username", "==", this.username)
        .get()
        .then(function(querySnapshot) {
          if (querySnapshot.size > 0) {
            alert("Username already exists. Please try with another username.");
            return false;
          } else {
            return true;
          }
        });
    },
    register() {
      var result = this.validate();
      var self = this;
      if (!result) {
        return;
      } else {
        var referralcode = this.random_code();
        firebase
          .firestore()
          .collection("campus_ambassadors")
          .where("referralcode", "==", referralcode)
          .get()
          .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              referralcode = self.random_code();
            });
          });
        var self = this;
        firebase
          .auth()
          .createUserWithEmailAndPassword(self.email, self.password)
          .then(
            function(user) {
              var data;
              data = {
                name: self.name,
                email: self.email,
                wpno: self.wpno,
                username: self.username,
                pno: self.pno,
                college: self.college,
                referralcode: referralcode,
                uid: user.user.uid,
                refers: 0
              };
              firebase
                .firestore()
                .collection("campus_ambassadors")
                .doc(user.user.uid)
                .set(data)
                .then(
                  function() {
                    alert("Successfully created.");
                    // window.location = './pages/reg.html';
                  },
                  function(error) {
                    alert(error.message);
                  }
                );
            },
            function(error) {
              var errorMessage = error.message;
              alert(errorMessage);
            }
          );
        return 0;
      }
    }
  }
});
