$(document).ready(function() {
  $(".notification__close").on("click", function() {
    $(".notification").removeClass("notification--show");
  });

  new Vue({
    el: "#app",
    data: {
      selectedClub: "",
      eventName: "",
      value: 0,
      user: null,
      error: false,
      disabled: false,
      requiem: {
        bandname: "",
        description: "",
        contact: null,
        songdew: "",
        link: "",
        genre: ""
      },
      destival: {
        teamname: "",
        links: ""
      },

      fashionshow: {
        teamname: "",
        link: ""
      },
      message: "",
      clubs,
      userarr: [],
      eventarr: [],
      clubs,
      email: ""
    },
    mounted() {
      var self = this;
      firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
          window.location.href = "/login";
        } else {
          self.user = user;
          firebase
            .firestore()
            .collection("users")
            .doc(self.user.uid)
            .get()
            .then(function(doc) {
              self.user.displayName = doc.data().name;
            });
        }
      });

      $(".notification__close").click(function() {
        $(self.$refs.notification).removeClass("notification--show");
      });
    },
    computed: {
      amount: function() {
        if (!this.error) {
          if (this.eventName) {
            if (this.eventName.name == "Ensemble") {
              if (this.value >= 7 && this.value <= 10) {
                return this.eventName.price;
              } else if (this.value > 10) {
                return this.eventName.price + (this.value - 10) * 100;
              }
            } else if (this.eventName.type == "team" && this.value != 0) {
              return this.value * this.eventName.price;
            } else {
              //return the the event's fixed price if type is : solo, duet and fixed
              return this.eventName.price;
            }
          } else {
            return 0;
          }
        } else {
          return "Not Applicable";
        }
      },
      getParticipants: function() {
        const type = this.eventName.type;
        return type === "team" || type === "fixed" ? true : false;
      },
      requiemSelected: function() {
        return this.eventName.name == "Requiem - War Of Bands";
      },
      destivalSelected: function() {
        return this.eventName.name == "Destival - Group Dance Competition";
      },
      kairosSelected: function() {
        return this.eventName.name == "Kairos - Fashion Show";
      }
    },
    watch: {
      value: function() {
        this.check();
      }
    },
    methods: {
      jsUcfirst: function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
      changeclub() {
        this.eventName = "";
        this.error = false;
        this.value = 0;
      },
      changevent() {
        this.error = false;
        this.value = this.eventName.name != "Ensemble" ? this.eventName.min : 7;
        this.check();
      },
      check() {
        const eventType = this.eventName.type;
        const min = this.eventName.min;
        const max = this.eventName.max;

        if (this.eventName.name == "Ensemble") {
          return;
        }
        if (eventType == "solo") this.value = 1;
        if (eventType == "duet") this.value = 2;
        if (eventType == "team" || eventType == "fixed") {
          if (this.value >= min && this.value <= max) {
            this.error = false;
          } else {
            this.error = true;
          }
        }

        if (
          this.requiemSelected ||
          this.destivalSelected ||
          this.kairosSelected
        ) {
          var event;
          if (this.requiemSelected) event = this.requiem;
          else if (this.destivalSelected) event = this.destival;
          else event = this.fashionshow;
          var error = false;
          const keys = Object.keys(event);
          keys.forEach(key => {
            if (!event[key]) {
              error = true;
            }
          });
          this.error = error;
          if (!(this.value >= min && this.value <= max)) {
            this.error = true;
          }
        }
      },
      logout() {
        firebase
          .auth()
          .signOut()
          .then(function() {
            window.location = "/eventregistrations.html";
          })
          .catch(function(error) {
            alert(error.message);
          });
      },
      submit() {
        var self = this;
        self.disabled = true;
        var userdb = firebase.firestore().collection("users");
        var eventdb = firebase.firestore().collection("events");
        eventdb
          .doc(self.eventName.name)
          .get()
          .then(
            function(doc) {
              if (doc.exists) {
                if (doc.data().users != undefined || doc.data().users != null)
                  self.userarr = doc.data().users;
                var obj = {};
                if (self.requiemSelected) {
                  obj = {
                    user: self.user.uid,
                    userName: self.user.displayName,
                    paid: false,
                    amount: self.amount,
                    email: self.user.email,
                    value: self.value,
                    bandName: self.requiem.bandname,
                    description: self.requiem.description,
                    contact: self.requiem.contact,
                    songdewLink: self.requiem.songdew,
                    videoLink: self.requiem.link,
                    genre: self.requiem.genre
                  };
                } else if (self.destivalSelected) {
                  obj = {
                    user: self.user.uid,
                    amount: self.amount,
                    userName: self.user.displayName,
                    paid: false,
                    email: self.user.email,
                    value: self.value,
                    teamName: self.destival.teamname,
                    links: self.destival.links
                  };
                } else if (self.eventName.name == "Kairos - Fashion Show") {
                  obj = {
                    user: self.user.uid,
                    amount: self.amount,
                    userName: self.user.displayName,
                    paid: false,
                    email: self.user.email,
                    value: self.value,
                    teamName: self.fashionshow.teamname
                  };
                } else {
                  obj = {
                    user: self.user.uid,
                    amount: self.amount,
                    userName: self.user.displayName,
                    paid: false,
                    email: self.user.email,
                    value: self.value
                  };
                }
                var found = self.userarr.some(function(el) {
                  return el.user === self.user.uid;
                });
                if (!found) {
                  self.userarr.push(obj);
                } else {
                  self.disabled = false;
                  alert("You've already registered.");
                  return;
                }
                eventdb.doc(self.eventName.name).update({
                  users: self.userarr
                });
                userdb
                  .doc(self.user.uid)
                  .get()
                  .then(function(doc) {
                    if (
                      doc.data().events != undefined ||
                      doc.data().events != null
                    )
                      self.eventarr = doc.data().events;
                    var obj = {};
                    if (self.requiemSelected) {
                      obj = {
                        event: self.eventName.name,
                        amount: self.amount,
                        value: self.value,
                        bandName: self.requiem.bandname,
                        paid: false,
                        description: self.requiem.description,
                        contact: self.requiem.contact,
                        songdewLink: self.requiem.songdew,
                        videoLink: self.requiem.link,
                        genre: self.requiem.genre
                      };
                    } else if (self.destivalSelected) {
                      obj = {
                        event: self.eventName.name,
                        amount: self.amount,
                        value: self.value,
                        paid: false,
                        teamName: self.destival.teamname,
                        links: self.destival.links
                      };
                    } else if (self.eventName.name == "Kairos - Fashion Show") {
                      obj = {
                        event: self.eventName.name,
                        amount: self.amount,
                        paid: false,
                        value: self.value,
                        teamName: self.fashionshow.teamname
                      };
                    } else {
                      obj = {
                        event: self.eventName.name,
                        amount: self.amount,
                        value: self.value,
                        paid: false
                      };
                    }
                    var found = self.eventarr.some(function(el) {
                      return el.event === self.eventName.name;
                    });
                    if (!found) {
                      self.eventarr.push(obj);
                    } else {
                      self.disabled = false;
                      alert("You've already registered.");
                      return;
                    }
                    userdb
                      .doc(self.user.uid)
                      .update({
                        events: self.eventarr
                      })
                      .then(function() {
                        self.message =
                          "Thank you for registering for " +
                          self.eventName.name +
                          ". Your unique code is: " +
                          doc.data().ucode +
                          ". Please refer to the mail for further instructions.";

                        self.$refs.modalToggle.checked = false;
                        $(self.$refs.notification).addClass(
                          "notification--show"
                        );

                        userdb
                          .doc(self.user.uid)
                          .get()
                          .then(function(doc) {
                            if (doc.exists) {
                              (self.email = doc.data().email),
                                (self.name = doc.data().name);
                              body = {
                                email: self.email,
                                message:
                                  "Thank you for registering for " +
                                  self.eventName.name +
                                  ". <br>Your unique code is " +
                                  doc.data().ucode +
                                  ".<br>. Please refer to the mail for further instructions. Please find the attached QR Code for payment of your respective event.<ul><li>Notedown the Unique ID i.e UID.</li><li>Scan the code on Paytm App and Pay as per the amount shown during Registerations.</li><li>Mention your name and UID in the Description of Paytm Payments Portal.</li><li>Email us on Payments@oneiros.in</li><li>Attach the screenshot of the Transction with  your basic details including Name, College Name, Phone Number, Email, Event Name, No. Of Participants, Amount to be paid, UID, Paytm Refrence code.</li><li>You will soon receive a confirmation mail from us as soon as we approve the Transction. The mail will contain a Bill Number which will be used to generate original bill on the Event date at MUJ ONEIROS'18 FINANCE DESK.</li></ul>",
                                name: self.name
                              };
                              fetch("/mail/sendImage.php", {
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
                                  self.clear();
                                });
                              self.disabled = false;
                              self.userarr = [];
                            }
                          });
                      });
                  });
              }
            },
            function(error) {
              alert(error.message);
              self.userarr = [];
              self.disabled = false;
            }
          );
      },
      clear() {
        this.selectedClub = "";
        this.eventName = "";
        this.disable = false;
      }
    }
  });
});
