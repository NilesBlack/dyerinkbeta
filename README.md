# Dyer Ink Beta

This is the github repository for the beta version of Dyer Ink.

The primary purpose will be:

* Getting comfortable with version control
* Getting familiar with the app/cordova build process
* Leveraging the free meteor deployment server to test features I was previously unable to test locally (things that require SSL, etc.)
* Implementing the most basic possible version (MVP) of the feature set of Dyer Ink with Meteor, before the production rollout.

##Feature set to be implemented:

### Client build

[] Static pages with content (Why sharks, etc.)
[] Routes (with iron:router) providing access to different areas of the site
[] Templated interface with consistent navigation
[] Dynamically generated content from database (populated by admin)
[] Front end of store
[] Contact form

### Admin Panel

[] Properly signed .apk
[] Secure sign-in
[] Input sanitization
[] Image capture
[] Image upload
[] Image-product association
[] Persistent database
[] Object store with product information
[] Google sign-in(?)

### Server

[] REST API test (Tastekid)
[] PrintAura API connection
[] Paypal API connection(?)
[] Secure implementation of the above (will require refactoring the methods [as described here](https://www.meteor.com/tutorials/blaze/security-with-methods))

## Not slated for this release:

* Full shopping cart/checkout (requires the final, secure server)
* Finalized UI (client or admin)
* Publish to DyerInk.com