new Vue ({
    el:"#dash",
    data:{
        referralcode:'',
        usercount:'',
    },
    created () {
        var self=this
        var userdb=firebase.firestore().collection("users")
        var campambdb=firebase.firestore().collection("campus_ambassadors")
        var uid

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                uid = user.uid;            
                campambdb.doc(uid)
                .get()
                .then(function(doc){
                    if (doc.exists) {
                        self.referralcode = doc.data().referralcode
                        self.usercount=doc.data().users.length
                    }else{
                        window.location.href="http://www.oneiros.co.in"
                    }
                })
            }    
          });
        
    }
    
})