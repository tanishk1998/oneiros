$(document).ready(function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get()
        .then(function(doc) {
          if (
            doc.data().admin == undefined ||
            doc.data().admin == null ||
            !doc.data().admin
          )
            window.location = "/";
          else {
            $(".admin-loader").css("display", "none");
          }
          if (
            window.location.pathname == "/admin/payments/" ||
            window.location.pathname == "/admin/payments/index.html"
          ) {
            if (
              doc.data().payments == undefined ||
              doc.data().payments == null ||
              !doc.data().payments
            ) {
              window.location = "/";
            }
          }
        });
    } else {
      window.location = "/";
    }
  });
});
