new Vue({
  el: "#register-container",
  data: {
    name: "",
    college: "",
    regno: "",
    code: "",
    password: "",
    repassword: "",
    username: "",
    email: "",
    isManipal: false,
    pno: "",
    wpno: "",
    campamb: "",
    response: 0,
    phoneNos: false,
    mujerror: "",
    othererror: "",
    message: "",
    disabled: false
  },
  methods: {
    validateOther() {
      var self = this;
      self.disabled = true;
      if (this.phoneNos) {
        this.wpno = this.pno;
      }
      if (
        this.college.toLowerCase() === "muj" ||
        this.college.toLowerCase() === "muj"
      ) {
        this.isManipal = true;
      }
      if (
        this.name == "" ||
        this.college == "" ||
        this.password == "" ||
        this.repassword == "" ||
        this.username == "" ||
        this.email == "" ||
        this.pno == "" ||
        this.wpno == ""
      ) {
        if (this.name == "") {
          self.othererror = "Name is Required!";
        } else if (this.college == "") {
          self.othererror = "College is Required!";
        } else if (this.password == "") {
          self.othererror = "Password is Required!";
        } else if (this.repassword == "") {
          self.othererror = "Password again is Required!";
        } else if (this.username == "") {
          self.othererror = "Username is Required!";
        } else if (this.email == "") {
          self.othererror = "Email is Required!";
        } else if (this.pno == "") {
          self.othererror = "Phone Number is Required!";
        } else {
          self.othererror = "Whatsapp Number is Required!";
        }
        return false;
      }
      if (this.password != this.repassword) {
        self.othererror = "Both passwords don't match.";
        return false;
      }
      return true;
    },
    registerOther() {
      var newCode = this.random_code();
      var result = this.validateOther();
      var uniqueCode = this.random_code();
      var self = this;
      if (!result) {
        self.disabled = false;
        return;
      }
      firebase
        .firestore()
        .collection("users")
        .where("username", "==", self.username)
        .get()
        .then(
          function(querySnapshot) {
            if (querySnapshot.size > 0) {
              self.othererror =
                "Username already exists. Please try with another username.";
              self.disabled = false;
            } else {
              if (self.code != "") {
                firebase
                  .firestore()
                  .collection("campus_ambassadors")
                  .where("referralcode", "==", self.code)
                  .get()
                  .then(
                    function(querySnapshot) {
                      if (querySnapshot.size > 0) {
                        querySnapshot.forEach(function(doc) {
                          firebase
                            .auth()
                            .createUserWithEmailAndPassword(
                              self.email,
                              self.password
                            )
                            .then(
                              function(user) {
                                if (self.campamb) {
                                  firebase
                                    .firestore()
                                    .collection("campus_ambassadors")
                                    .doc(user.user.uid)
                                    .set({
                                      name: self.name,
                                      college: self.college,
                                      username: self.username,
                                      email: self.email,
                                      ucode: uniqueCode,
                                      pno: self.pno,
                                      wpno: self.wpno,
                                      uid: user.user.uid,
                                      sameNos: self.phoneNos,
                                      referred: true,
                                      referralcode: newCode
                                    })
                                    .catch(function(error) {
                                      self.othererror = error.message;
                                      self.disabled = false;
                                    });
                                }
                                if (
                                  doc.data().users != undefined &&
                                  doc.data().users != null
                                ) {
                                  var usersArr = doc.data().users;
                                  if (!usersArr.includes(user.user.uid))
                                    usersArr.push(user.user.uid);
                                  firebase
                                    .firestore()
                                    .collection("campus_ambassadors")
                                    .doc(doc.id)
                                    .update({
                                      users: usersArr
                                    });
                                } else {
                                  var usersArr = [];
                                  usersArr.push(user.user.uid);
                                  firebase
                                    .firestore()
                                    .collection("campus_ambassadors")
                                    .doc(doc.id)
                                    .update({
                                      users: usersArr
                                    });
                                }
                                firebase
                                  .firestore()
                                  .collection("users")
                                  .doc(user.user.uid)
                                  .set({
                                    name: self.name,
                                    college: self.college,
                                    username: self.username,
                                    email: self.email,
                                    ucode: uniqueCode,
                                    pno: self.pno,
                                    wpno: self.wpno,
                                    uid: user.user.uid,
                                    isManipal: self.isManipal,
                                    sameNos: self.phoneNos,
                                    referred: true,
                                    referralcode: self.code,
                                    referredUid: doc.data().uid,
                                    campamb: self.campamb
                                  })
                                  .then(
                                    function() {
                                      this.othererror = "Successful";
                                      self.disabled = false;
                                    },
                                    function(error) {
                                      this.othererror = error.message;
                                      self.disabled = false;
                                    }
                                  );
                                body = {
                                  email: self.email,
                                  message: self.message,
                                  name: self.name
                                };
                                fetch("/mail/checkMail.php", {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json"
                                  },
                                  body: JSON.stringify(body)
                                })
                                  .then(res => {
                                    return res.json();
                                  })
                                  .then(response => {
                                    if (response.code === 200) {
                                      self.othererror =
                                        "We'll get back to you!";
                                    } else if (response.code === 405) {
                                      self.othererror = "Fields cant be empty!";
                                    } else if (response.code === 406) {
                                      self.othererror = "Invalid E-Mail";
                                    }
                                  });
                                window.location = "/eventregistrations";
                              },
                              function(error) {
                                self.othererror = error.message;
                                self.disabled = false;
                              }
                            );
                        });
                      } else {
                        self.othererror = "Referral Code not Valid";
                        self.disabled = false;
                      }
                    },
                    function(error) {
                      self.othererror = error.message;
                      self.disabled = false;
                      return;
                    }
                  );
              } else {
                var body = {
                  email: self.email,
                  message: self.message,
                  name: self.name
                };
                firebase
                  .auth()
                  .createUserWithEmailAndPassword(self.email, self.password)
                  .then(
                    function(user) {
                      if (self.campamb) {
                        firebase
                          .firestore()
                          .collection("campus_ambassadors")
                          .doc(user.user.uid)
                          .set({
                            name: self.name,
                            college: self.college,
                            username: self.username,
                            email: self.email,
                            ucode: uniqueCode,
                            pno: self.pno,
                            wpno: self.wpno,
                            uid: user.user.uid,
                            sameNos: self.phoneNos,
                            referred: false,
                            referralcode: newCode
                          })
                          .catch(function(error) {
                            self.othererror = error.message;
                            self.disabled = false;
                          });
                      }
                      firebase
                        .firestore()
                        .collection("users")
                        .doc(user.user.uid)
                        .set({
                          name: self.name,
                          college: self.college,
                          username: self.username,
                          email: self.email,
                          ucode: uniqueCode,
                          pno: self.pno,
                          wpno: self.wpno,
                          uid: user.user.uid,
                          isManipal: self.isManipal,
                          sameNos: self.phoneNos,
                          referred: false,
                          campamb: self.campamb
                        })
                        .then(
                          function() {
                            fetch("/mail/checkMail.php", {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json"
                              },
                              body: JSON.stringify(body)
                            })
                              .then(res => {
                                return res.json();
                              })
                              .then(response => {
                                if (response.code === 200) {
                                  self.mujerror = "We'll get back to you!";
                                } else if (response.code === 405) {
                                  self.mujerror = "Fields cant be empty!";
                                } else if (response.code === 406) {
                                  self.mujerror = "Invalid E-Mail";
                                }
                                // window.open = "/eventregistrations";
                              });
                            self.othererror = "Successfully Registered";
                            self.disabled = false;
                            self.clear();
                            setTimeout(() => {
                              window.location = "/eventregistrations";
                            }, 1500);
                          },
                          function(error) {
                            this.othererror = error.message;
                            self.disabled = false;
                          }
                        );
                    },
                    function(error) {
                      self.othererror = error.message;
                      self.disabled = false;
                    }
                  );
              }
            }
          },
          function(error) {
            self.othererror = error.message;
            self.disabled = true;
          }
        );
    },
    validateManipal() {
      var self = this;
      self.disabled = true;
      if (this.phoneNos) {
        this.wpno = this.pno;
      }
      if (
        this.name == "" ||
        this.regno == "" ||
        this.password == "" ||
        this.repassword == "" ||
        this.username == "" ||
        this.email == "" ||
        this.pno == "" ||
        this.wpno == ""
      ) {
        if (this.name == "") {
          self.mujerror = "Name is Required!";
        } else if (this.regno == "") {
          self.mujerror = "Registration Number is Required!";
        } else if (this.password == "") {
          self.mujerror = "Password is Required!";
        } else if (this.repassword == "") {
          self.mujerror = "Password again is Required!";
        } else if (this.username == "") {
          self.mujerror = "Username is Required!";
        } else if (this.email == "") {
          self.mujerror = "Email is Required!";
        } else if (this.pno == "") {
          self.mujerror = "Phone Number is Required!";
        } else {
          self.mujerror = "Whatsapp Number is Required!";
        }
        return false;
      }
      if (this.password != this.repassword) {
        self.mujerror = "Both passwords don't match.";
        return false;
      }
      return true;
    },
    registerManipal() {
      var result = this.validateManipal();
      var uniqueCode = this.random_code();
      var self = this;
      if (!result) {
        self.disabled = false;
        return;
      }
      firebase
        .firestore()
        .collection("users")
        .where("username", "==", self.username)
        .get()
        .then(
          function(querySnapshot) {
            if (querySnapshot.size > 0) {
              self.mujerror =
                "Username already exists. Please try with another username.";
              self.disabled = false;
            } else {
              firebase
                .firestore()
                .collection("users")
                .where("regno", "==", self.regno)
                .get()
                .then(function(query) {
                  if (query.size > 0) {
                    self.mujerror =
                      "This registration Number already has an account associated with it.";
                    self.disabled = false;
                  } else {
                    firebase
                      .auth()
                      .createUserWithEmailAndPassword(self.email, self.password)
                      .then(
                        function(user) {
                          firebase
                            .firestore()
                            .collection("users")
                            .doc(user.user.uid)
                            .set({
                              name: self.name,
                              regno: self.regno,
                              username: self.username,
                              email: self.email,
                              isManipal: true,
                              ucode: uniqueCode,
                              pno: self.pno,
                              wpno: self.wpno,
                              sameNos: self.phoneNos
                            })
                            .then(
                              function() {
                                ("In");
                                var body = {
                                  email: self.email,
                                  message: self.message,
                                  name: self.name
                                };
                                fetch("/mail/checkMail.php", {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json"
                                  },
                                  body: JSON.stringify(body)
                                })
                                  .then(res => {
                                    return res.json();
                                  })
                                  .then(response => {
                                    if (response.code === 200) {
                                      self.mujerror = "We'll get back to you!";
                                    } else if (response.code === 405) {
                                      self.mujerror = "Fields cant be empty!";
                                    } else if (response.code === 406) {
                                      self.mujerror = "Invalid E-Mail";
                                    }
                                    self.disabled = false;
                                  });
                                self.disabled = false;
                                self.mujerror = "Successfully Registered!";
                                self.clear();
                                setTimeout(() => {
                                  window.location = "/eventregistrations";
                                }, 1500);
                              },
                              function(error) {
                                self.mujerror = error.message;
                                self.disabled = false;
                              }
                            );
                        },
                        function(error) {
                          self.mujerror = error.message;
                          self.disabled = false;
                        }
                      );
                  }
                });
            }
          },
          function(error) {
            this.mujerror = error.message;
            self.disabled = false;
          }
        );
    },
    clear() {
      this.name = "";
      this.college = "";
      this.email = "";
      this.regno = "";
      this.pno = "";
      this.wpno = "";
      this.password = "";
      this.code = "";
      this.ucode = "";
      this.username = "";
      this.repassword = "";
      this.campamb = "";
      this.isManipal = false;
    }
  }
});

document.getElementById("muj-last").onkeypress = e => {
  if (!e) e = window.event;
  var code = e.keyCode;
  if (code === 13) {
    document.getElementById("muj-submit").click();
  }
};

document.getElementById("other-last").onkeypress = e => {
  if (!e) e = window.event;
  var code = e.keyCode;
  if (code === 13) {
    document.getElementById("other-submit").click();
  }
};
