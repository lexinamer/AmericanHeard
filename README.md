# America Heard

Basic development can be done by editing locally and previewing with a simple python server.

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

Note: You will need owner permissions through Firebase to deploy. If you are a contributor to this project, email mclawges22@gmail.com to be added to the Firebase project.

# Where's the data coming from?

Metadata for each film is stored in a Google Sheet that the America Heard project managers update when new films are added. The site updates directly from the Google Sheet as changes are made.

The map svg is loaded from topoJSON files through d3.js. The additional data layers were collected from the U.S. Census and other public government databases. The source data can be found in JSON files in the /public/83746274/data directory. The data has been re-formatted into data structures that are optimized for our use cases (mostly easy lookup), which are stored in the /public/javascript directory and linked directly in the pages.
