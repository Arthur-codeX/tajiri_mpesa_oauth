Mpesa Authorization Token

> npm

> [npm]](https://www.npmjs.com/package/tajiri_mpesa_oauth)

## tajiri_mpesa_oauth

## NPM

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
  CONSUMER_KEY: "8K7tZgVOxD2CRiqvhKC1iEpyId1zcniG",
  CONSUMER_SECRET: "efhD37bLSAsNkdvG",
};

// Using Async Await

async function getMpesaToken() {
  let token = await mpesa_oauth(conf);
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

> get the application credentials from daraja

> [daraja]](https://developer.safaricom.co.ke/)
