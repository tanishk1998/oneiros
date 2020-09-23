new Vue({
  el: '#details',
  data: {
    ucode: '',
    disabled: false,
    loading: false,
    userData: {},
    keyss: {
      event: 'Name',
      email: 'E-mail',
      bandName: 'Band Name',
      value: 'No. of participants',
      songdewlink: 'Songdew Link',
      videoLink: 'Video Link',
      teamName: 'Team Name',
      pno: 'Phone No.',
      regno: 'Registration No.',
      wpno: 'Whatsapp No.'
    }
  },
  methods: {
    display() {
      if (!this.ucode) {
        alert('Enter a valid ucode')
        return
      }
      this.loading = true
      this.disabled = true
      var self = this
      var userdb = firebase.firestore().collection('users')
      this.ucode = this.ucode.trim()
      userdb
        .where('ucode', '==', self.ucode)
        .get()
        .then(function(querySnapshot) {
          if (querySnapshot.size > 0) {
            querySnapshot.forEach(function(doc) {
              console.log(doc.data())
              self.userData = doc.data()
            })
            self.loading = false
            self.disabled = false
          } else {
            self.loading = false
            self.disabled = false
            alert('Invalid Ucode')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
