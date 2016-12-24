# Angular 2 Messenger

This project consists of a simple messenger. Includes authentication and message features. Users can sign in, sign up, post, edit and delete messages. All messages are displayed on a simple dashboard.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Requirements

* [Node.js](https://nodejs.org) - JavaScript runtime
* [MongoDB](https://www.mongodb.com/) - Database

### Installing

This installation procedure assumes you have node.js already installed. To install dependencies run the following command in the project folder:

```bash
npm install
```

### Running the project

After installing modules, you have to build the front-end application. To do so you can run in two modes. 
To run it in development mode use the follow command:
```bash
npm run build
```
Keep in mind that this will keep running in your terminal. It allows for any modifications that you make in the code to be automatically rebuild. 

To build the front-end in production mode, you have to use the following command:
```bash
npm run build:prod
```
This command builds the front-end application with angular AOT compiler, in a way that drastically decreases its size. You can find more about why this happens and what AOT compiler is [here](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html).
