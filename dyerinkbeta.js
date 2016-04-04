Router.configure({
    layoutTemplate: 'main'
});

if(Meteor.isServer) {
    
}

if(Meteor.isClient) {
    
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