new Vue({
  el: "#admin-events",
  data: {
    clubs,
    selectedClub: "",
    selectedEvent: "",
    usersarr: [],
    namearr: [],
    disabled: false
  },
  methods: {
    changeclub() {
      this.selectedEvent = "";
    },
    display() {
      var arr;
      var self = this;
      if (self.selectedClub == "" || self.selectedEvent == "") {
        self.disabled = false;
        return;
      }
      self.disabled = true;
      firebase
        .firestore()
        .collection("events")
        .doc(self.selectedEvent.name)
        .get()
        .then(function(doc) {
          arr = doc.data().users;
          let promArr = [];
          arr.forEach(function(child) {
            const p = new Promise((res, rej) => {
              firebase
                .firestore()
                .collection("users")
                .doc(child.user)
                .get()
                .then(function(userDoc) {
                  child.college = userDoc.data().college;
                  child.userName = userDoc.data().name;
                  child.pno = userDoc.data().pno;
                  child.wpno = userDoc.data().wpno;
                  child.isManipal = userDoc.data().isManipal;
                  child.ucode = userDoc.data().ucode;
                  self.disabled = false;
                  var found = userDoc
                    .data()
                    .events.findIndex(function(element) {
                      return element.event == self.selectedEvent.name;
                    });
                  child.paid = userDoc.data().events[found].paid;
                  res();
                });
            });
            promArr.push(p);
          });
          Promise.all(promArr).then(() => {
            self.usersarr = arr;
          });
        });
    }
  }
});
