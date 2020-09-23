new Vue({
  el: "#walkin",
  data: {
    name: "",
    user: null,
    uniqueID: "",
    email: "",
    pno: "",
    type: "",
    college: "",
    disabled: true,
    isManipal: null,
    regno: "",
    loading: false,
    registered: false
  },
  mounted() {
    var self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .get()
          .then(function(doc) {
            if (!doc.data().wAdmin) {
              window.location.href = "/login";
            } else {
              self.user = user;
              self.user.displayName = doc.data().name;
            }
          });
      } else {
        window.location.href = "/login";
      }
    });
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          window.location.href = "/login";
        });
    },
    clear: function() {
      this.name = "";
      this.uniqueID = "";
      this.email = "";
      this.pno = "";
      this.type = "";
      this.college = "";
      this.disabled = true;
      this.isManipal = null;
      this.regno = "";
      this.loading = false;
      this.registered = false;
      $("input")
        .val("")
        .removeClass("valid");
      M.updateTextFields();
    },
    random_code: function() {
      var start = new Date().getTime();
      var end = start.toString(8).substr(10);
      var random = Math.random()
        .toString(36)
        .substr(10);
      var res = random.concat(end);

      return res;
    },
    changeType() {
      if (this.type == "manipal") {
        this.disabled = true;
        this.college = "Manipal University Jaipur";
      } else if (this.type == "outhouse") {
        this.disabled = false;
        this.college = "";
      }
    },
    validate() {
      this.loading = true;
      M.Toast.dismissAll();
      var flag = 0;
      if (
        this.name == "" ||
        this.email == "" ||
        this.college == "" ||
        this.pno == "" ||
        this.type == "" ||
        (this.regno == "" && this.type == "manipal")
      ) {
        flag = 1;
        M.toast({
          html:
            '<i class="material-icons red-text text-darken-2">error</i>&nbsp;&nbsp;One or more fields empty!'
        });
      }

      if (flag == 0) return true;
      else return false;
    },
    walkIn() {
      var self = this;
      if (!this.validate()) {
        this.loading = false;
        return;
      }
      if (this.college == "Manipal University Jaipur") this.isManipal = true;
      else this.isManipal = false;
      var rcode = self.random_code();
      if (this.isManipal) {
        var obj = {
          name: this.name,
          email: this.email,
          college: this.college,
          isManipal: true,
          pno: this.pno,
          regno: this.regno,
          walkinId: rcode
        };
      } else {
        var obj = {
          name: this.name,
          email: this.email,
          college: this.college,
          isManipal: false,
          pno: this.pno,
          walkinId: rcode
        };
      }
      self.uniqueID = obj.walkinId;
      if (self.isManipal) {
        firebase
          .firestore()
          .collection("walkin")
          .where("regno", "==", self.regno)
          .get()
          .then(function(querySnapshot) {
            var id;
            if (querySnapshot.size > 0) {
              querySnapshot.forEach(function(doc) {
                id = doc.id;
                obj.walkinId = doc.data().walkinId;
                self.uniqueID = obj.walkinId;
              });
              firebase
                .firestore()
                .collection("walkin")
                .doc(id)
                .set(obj)
                .then(function() {
                  fetch("/mail/msg/msg.php", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(obj)
                  });
                  fetch("/mail/walkIn.php", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(obj)
                  }).then(res => {
                    return res.json();
                  });
                  M.toast({
                    html:
                      '<i class="material-icons red-text text-darken-2">info</i>&nbsp;&nbsp;The unique code is ' +
                      obj.walkinId +
                      "!"
                  });
                  self.registered = true;
                  self.loading = false;
                });
            } else {
              firebase
                .firestore()
                .collection("walkin")
                .add(obj)
                .then(function() {
                  fetch("/mail/msg/msg.php", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(obj)
                  });
                  fetch("/mail/walkIn.php", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(obj)
                  }).then(res => {
                    return res.json();
                  });
                  M.toast({
                    html:
                      '<i class="material-icons red-text text-darken-2">info</i>&nbsp;&nbsp;The unique code is ' +
                      obj.walkinId +
                      "!"
                  });
                  self.registered = true;
                  self.loading = false;
                });
            }
          });
      } else {
        firebase
          .firestore()
          .collection("walkin")
          .where("email", "==", self.email)
          .get()
          .then(function(querySnapshot) {
            var id, isManipal;
            if (querySnapshot.size > 0) {
              querySnapshot.forEach(function(doc) {
                id = doc.id;
                isManipal = doc.data().isManipal;
                if (!isManipal) {
                  obj.walkinId = doc.data().walkinId;
                  self.uniqueID = obj.walkinId;
                }
              });
              if (isManipal) {
                firebase
                  .firestore()
                  .collection("walkin")
                  .add(obj)
                  .then(function() {
                    fetch("/mail/msg/msg.php", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify(obj)
                    });
                    fetch("/mail/walkIn.php", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify(obj)
                    }).then(res => {
                      return res.json();
                    });
                    M.toast({
                      html:
                        '<i class="material-icons red-text text-darken-2">info</i>&nbsp;&nbsp;The unique code is ' +
                        obj.walkinId +
                        "!"
                    });
                    self.registered = true;
                    self.loading = false;
                  });
              } else {
                firebase
                  .firestore()
                  .collection("walkin")
                  .doc(id)
                  .set(obj)
                  .then(function() {
                    fetch("/mail/msg/msg.php", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify(obj)
                    });
                    fetch("/mail/walkIn.php", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify(obj)
                    }).then(res => {
                      return res.json();
                    });
                    M.toast({
                      html:
                        '<i class="material-icons red-text text-darken-2">info</i>&nbsp;&nbsp;The unique code is ' +
                        obj.walkinId +
                        "!"
                    });
                    self.registered = true;
                    self.loading = false;
                  });
              }
            } else {
              firebase
                .firestore()
                .collection("walkin")
                .add(obj)
                .then(function() {
                  fetch("/mail/msg/msg.php", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(obj)
                  });
                  fetch("/mail/walkIn.php", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(obj)
                  }).then(res => {
                    return res.json();
                  });
                  M.toast({
                    html:
                      '<i class="material-icons red-text text-darken-2">info</i>&nbsp;&nbsp;The unique code is ' +
                      obj.walkinId +
                      "!"
                  });
                  self.registered = true;
                  self.loading = false;
                });
            }
          });
      }
    }
  }
});
