# AmericanHeard

Basic development can be done by editing locally and previewing index.html in the browser.

This site will be deployed with Firebase static content server. Instructions for basic Firebase setup below:

The Firebase CLI (Command Line Interface) requires Node.js and npm, which can both be installed by following the instructions on https://nodejs.org/. Installing Node.js also installs npm.

Once you have Node.js and npm installed, you can install the Firebase CLI via npm:
$ npm install -g firebase-tools

This installs the globally available firebase command. To update to the latest version, simply re-run the same command.

# When ready to deploy:

Run $ firebase deploy

You may get an error and need to run
$ firebase use -add
When prompted, pick the "american-heard" project. If you don't see it then make sure you are logged in to Firebase.

Staging site is found at https://american-heard.firebaseapp.com/ until ready to deploy to custom domain.
