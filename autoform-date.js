if(Meteor.isClient) {
  Template.form.helpers({
    date: function() {
      return new SimpleSchema({
        date: {
          type: Date
        }
      })
    }
  })
}