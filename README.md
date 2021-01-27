
# Contractor Business Site Project
This is a website built for a client who runs his own construction business. He does general handyman services, remodel work, and fine woodworking. He wanted a website where he can communicate with clients about potential and current jobs, and show off his past work to build up his business. The goal is ultimately to centralize the business in one location to organize what is currently a bundle of texts, emails, and multiple photo sharing sites that he currently uses.

This version uses React, Redux, Node.js, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

Live development version of the site available at [lumber-manipulator.herokuapp.com](https://lumber-manipulator.herokuapp.com/)

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `contractor portal`

SQL text for setting up tables, along with 2 generic users is provided in the database.sql file.

The generic usernames are:
admin@admin.com
client@client.com

The generic passwords are the same as the emails.

THESE USERS ARE FOR TESTING ONLY. They should be removed from the db before deploying.

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000` in the browser

## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)


## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`