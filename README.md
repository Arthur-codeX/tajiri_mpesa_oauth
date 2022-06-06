Mpesa Authorization Token

# tajiri_mpesa_oauth

## Description

This is a simple package for generating mpesa-daraja authentication tokens.

## Usage

### Installing NPM

npm install tajiri-mpesa-oauth

### Installing Yarn

yarn add tajiri-mpesa-oauth

### Usage

```javascript
const mpesa_oauth = require("tajiri-mpesa-oauth");

// The Consumer Key and Secret can be found in daraja
const conf = {
  CONSUMER_KEY: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
  CONSUMER_SECRET: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
};

const environment = "sandbox";
//const environment='live'  // After publishing the application
// By default the environment is sandbox
// The environment can be sandbox or live
//For Live the application should be published

// Using Async Await

const auth_type = "Basic";
// The Basic authentication is the default
// You could set this if required

async function getMpesaToken() {
  let token = await mpesa_oauth(conf, environment, auth_type);
  console.log(token);
}

getMpesaToken();

//Using Promises

mpesa_oauth(conf)
  .then((token) => {
    console.log(token);
  })
  .catch((err) => {
    console.log(err);
  });

/**
 *
 * More About Promises Error Handling.
 * https://www.javascripttutorial.net/es6/promise-error-handling/
 */
```

> mpesa_oauth(arg1, arg2, arg3)

> arg1=This should be the configuration object which should have the following keys, CONSUMER_KEY and CONSUMER_SECRET.

> arg2= This should the environment of your application. It should be either live or sandbox. The default value is sandbox

> arg3= This should be the Authentication type. By default its Basic.

---

> get the application credentials from daraja

> [daraja]](https://developer.safaricom.co.ke/)