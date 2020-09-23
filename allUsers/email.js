firebase
  .firestore()
  .collection("users")
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      let data = doc.data();
      if (data.events != undefined && data.events != null) {
        console.log(data.email);
      }
    });
  });
