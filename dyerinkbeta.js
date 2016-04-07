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
            //const paBool = event.target.printauraBool.value;
            //const paProductType = event.target.paProductType.value;
            Inventory.insert({
                itemName : itemName,
                itemPrice : itemPrice,
                //paBool : paBool,
                //paProductType : paProductType
            });
            toastr.success("Your item: " + itemName + " has been submitted", "Item submitted");
            setTimeout(function() {window.location="../editInventory"}, 1500);
        },
        'click #cancelButton'(event) {
            Inventory.remove(this._id);
            toastr.info("Deletion request has been submitted");
            setTimeout(function() {window.location="../editInventory"}, 1500);
        }
    });
    Template.addItem.helpers({
        
    });
    Template.editInventory.helpers({
        inventory() {
            return Inventory.find({});
        },
        itemCount() {
            return Inventory.find({}).count();
        }
    });
    Template.home.helpers({
        isCordova() {
            if(Meteor.isCordova) {
                return true;
            }
            else {
                return false;
            }
        }
    });
}

Router.route('/', {
    template: 'home'
});

Router.route('/whysharks');

//if(Meteor.isCordova) {
    Router.route('/dsh');
    Router.route('/adminMain');
    Router.route('/newCoupon');
    Router.route('/editInventory');
    Router.route('/addItem');
//}

Router.route('/addItem/:itemID', function () {
  var itemID = this.params.itemID; 
  this.render('addItem', {
    data: function () {
      return Inventory.findOne({_id: itemID});
    }
  });
});


/*CODE FOR SENDING EMAIL

Meteor.call('sendEmail',
                'recipient@example.com',
                'sender@example.com',
                'Subject',
                'The actual body of the message. Just replace all the above with correct information.');
                
                */