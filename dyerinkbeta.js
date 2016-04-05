Router.configure({
    layoutTemplate: 'main'
});

if(Meteor.isServer) {
    // In your server code: define a method that the client can call
    Meteor.methods({
      sendEmail: function (to, from, subject, text) {
        
    
        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();
    
        Email.send({
          to: to,
          from: from,
          subject: subject,
          text: text
        });
      }
    });
}

if(Meteor.isClient) {
    Template.addItem.events({
        'submit .new-task'(event) {
            event.preventDefault();
            console.log("emailing");
            Meteor.call('sendEmail',
                'recipient@example.com',
                'sender@example.com',
                'Subject',
                'The actual body of the message. Just replace all the above with correct information.');
        }
    });

}

Router.route('/', {
    template: 'home'
});

Router.route('/whysharks');
Router.route('/dsh');
Router.route('/adminMain');
Router.route('/newCoupon');
Router.route('/editInventory');
Router.route('/addItem');