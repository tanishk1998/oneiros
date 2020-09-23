new Vue ({
    el:'#eventsform',
    
    data:{
        ename:'',
        club:'',
        minParticipants:'',
        maxParticipants:'',
        fee:'',
        errorMsg: '',
        disabled: false
    },

    methods:{
        submit(){
            var self=this
            self.disabled = true
            var eventdb=firebase.firestore().collection('events')

            if(self.ename==''||self.club==''||self.minParticipants==''||self.maxParticipants==''||self.fee==''){
                this.errorMsg = "One or more fields are empty";
            }
            else{
            eventdb.doc(self.ename).set({
                ename:self.ename,
                club:self.club,
                minParticipants:self.minParticipants,
                maxParticipants:self.maxParticipants,
                fee:self.fee
            
            }).then(function() {
                self.errorMsg = "Succesful";
                setTimeout(function(){ self.clear(); }, 1500);
            }, function (error) {
                alert(error.message);
            })
            }
        },
        clear () {
            this.ename = '';
            this.club = '';
            this.disabled = false;
            this.minParticipants = '';
            this.maxParticipants = '';
            this.fee = '';
            this.errorMsg = '';
        }
    }
})