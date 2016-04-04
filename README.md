# Dyer Ink Beta

This is the github (version control) repository for the Dyer Ink Beta.
The purpose of this early beta is _not_ to be a final version of the product, but rather for;

* Getting comfortable with version control
* Getting familiar with the app/cordova build process
* Leveraging the free meteor deployment server to test features I was previously unable to test locally (that require SSL, etc.)
* Implementing the most basic possible version (MVP) of the feature set of Dyer Ink with Meteor, before the production rollout.

For a large scale production app processing financial information, familiarity with the above systems will be a *must*.

1. **Version control**

   Dyer ink will be deployed in a 'phased rollout'. This allows for a basic version of the product to be ready for use as soon as possible, without compromising on the total list of features to be implemented.

   In order to manage what will eventually be hundreds of versions of (at least) dozens of files, a version control system (similar to revision history in Google Docs) is used.

2. **Application build process**

   We have opted for an Android deployment over a web application. This allows for easier creation of new item listings (the camera of the device can be accessed directly) and for drafts to be created and stored locally at any time, then published when connected to the internet (in contrast to a web page).

   Accordingly, during the course of development, the application will need to be compiled hundreds of times. If there is a flaw in the toolchain, a missing dependency, or other issue _not with the code_, it has to be worked out beforehand to prevent huge wastes of time later.

3. **Meteor deployment Server**

   To ensure the application will work from anywhere, and run smoothly once the server reaches its final home, it helps to not have to troubleshoot the server alongside the app/site itself. Currently, the server is only accessible within the local network.

   ~~Using Meteor's free deployment server, [the current version of the app](http://dyer.meteor.com), up to _the very second_, can be viewed at any time, from anywhere. This *hugely* benefits the testing process.~~
   
   Aaaaaannnnddd, it looks like **Meteor literally [_just_ discontinued the free tier of their deployment server](https://forums.meteor.com/t/meteor-com-free-hosting-ends-march-25-2016/19308) for testing**. So... Yeah.
   
   Well, if you're connected to Halstead-Basement, you can access it on the local network [here](http://10.0.1.72:3000).

4. **Creating the MVP**

   The MVP (minimum viable product) allows the core functionality to be seen and tested in a vaccum. This is important because the core functionality **must be rock solid**.

   It also allows for any fundamental flaws in configuration, planning, or implementation to be discovered early - when they can still be fixed without significantly delaying the project.

Now that you know why this exists, let's take a look at our goals! This will be continually updated as we progress.

##Feature set to be implemented:

### Client build

- [x] Static pages with content (Why sharks, etc.)
- [x] Routes (with iron:router) providing access to different areas of the site
- [ ] Templated interface with consistent navigation
- [ ] Dynamically generated content from database (populated by admin)
- [ ] Front end of store
- [ ] Contact form

### Admin Panel

- [x] Page Templates
- [ ] Properly signed .apk
- [ ] Secure sign-in
- [ ] Input sanitization
- [ ] Image capture
- [ ] Image upload
- [ ] Image-product association
- [ ] Persistent database
- [ ] Object store with product information
- [ ] Google sign-in(?)

### Server

- [ ] REST API test (Tastekid)
- [x] Functional compilation toolchain for Android
- [ ] PrintAura API connection
- [ ] Paypal API connection(?)
- [ ] Secure implementation of the above (will require refactoring the methods [as described here](https://www.meteor.com/tutorials/blaze/security-with-methods))

## Not slated for this release:

* Full shopping cart/checkout (requires the final, secure server, since we'll be tying everything to its security certificate)
* Finalized UI (client or admin)
* Publishing to DyerInk.com (it will only be available on a meteor subdomain)