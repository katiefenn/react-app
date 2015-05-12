# React App Template
A template for small React apps

## Getting started
The app is bundled with a development server. To use it, make sure you have the following dependencies installed:

- Node.JS
- npm
- Grunt

Then run the commands from the command line in the project root directory:

```
npm install
grunt server
```

Grunt should automatically open a tab in a web browser, but if this doesn't work, the website can be viewed with the URL:

[http://localhost:9001/](http://localhost:9001/)

### Testing
The app is tested using CasperJS functional tests. To test the app, __start the development server__ using the instructions in Getting Started and make sure you have the following dependencies installed:

- PhantomJS
- CasperJS

Then run the commands from the command line:

```
grunt server
npm test
```
N.b. you will need to use separate terminal windows to run each command, because Grunt waits for connections to the server.