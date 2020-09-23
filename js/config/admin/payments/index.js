new Vue({
  el: "#payments-admin",
  data: {
    uid: "",
    name: "",
    paid: null,
    pno: "",
    wpno: "",
    email: "",
    isManipal: null,
    regno: "",
    username: "",
    college: "",
    show: false,
    disabled: false,
    events: null,
    uniqueID: null,
    paidEvents: []
  },
  methods: {
    addPayment: function() {
      var self = this;
      self.uid = self.uid.trim();
      self.disabled = true;
      if (self.uid == "") {
        self.disabled = false;
        return;
      }
      firebase
        .firestore()
        .collection("users")
        .where("ucode", "==", self.uid)
        .get()
        .then(function(querySnapshot) {
          if (querySnapshot.size > 0) {
            querySnapshot.forEach(function(child) {
              self.name = child.data().name;
              self.uniqueID = child.id;
              self.pno = child.data().pno;
              self.wpno = child.data().wpno;
              self.isManipal = child.data().isManipal;
              self.email = child.data().email;
              if (self.isManipal) self.regno = child.data().regno;
              else self.college = child.data().college;
              self.username = child.data().username;
              self.events = child.data().events;
            });
            self.show = true;
            self.disabled = false;
          } else {
            self.disabled = false;
          }
        });
    },
    addPaid(index) {
      var self = this;
      self.events[index].paid = true;
      firebase
        .firestore()
        .collection("users")
        .doc(self.uniqueID)
        .update({
          events: self.events
        })
        .then(function() {
          firebase
            .firestore()
            .collection("payments")
            .doc(self.uniqueID)
            .get()
            .then(function(doc) {
              if (doc.exists) {
                if (doc.data().events != undefined && doc.data().events != null)
                  self.paidEvents = doc.data().events;
              }
              self.paidEvents.push(self.events[index].event);
              firebase
                .firestore()
                .collection("payments")
                .doc(self.uniqueID)
                .set({
                  events: self.paidEvents
                })
                .then({
                  function() {
                    console.log("Successful");
                  }
                });
            });
        });
    }
  }
});
