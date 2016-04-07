import { Mongo } from 'meteor/mongo';
 
export const Coupons = new Mongo.Collection('coupons');
export const Inventory = new Mongo.Collection('inventory');

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
        'submit .newItem'(event) {
            event.preventDefault();
            const itemName = event.target.itemName.value;
            const itemPrice = event.target.itemPrice.value;
            const paBool = event.target.printauraBool.value;
            const paProductType = event.target.paProductType.value;
            Inventory.insert({
                
            });
            toastr.success("Your item: " + event.target.itemName.value + " has been submitted", "Item submitted");
        }
    });
    Template.addItem.helpers({
        
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


/*CODE FOR SENDING EMAIL

Meteor.call('sendEmail',
                'recipient@example.com',
                'sender@example.com',
                'Subject',
                'The actual body of the message. Just replace all the above with correct information.');
                
                */