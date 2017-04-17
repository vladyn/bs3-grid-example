'use strict';

// using request. Request executes callbacks 
const fetch = require('node-fetch');
const request = require('request');

request.get('http://httpbin.org/get', (error, response, body) => {
  if (error) {
    console.error('Oh shoot. Something went wrong:');
    console.error(error.message);
    return;
  }
 
  console.log('Request done. Response status code: %d', response.statusCode);
});

// now with fetch. Feetch returns promise
fetch('No valid')
	.then(response => {console.log(`Response went ok with code %d ${response.status}`)}, error => {console.log(`Response went NOT ok with code %d ${error.message}`);
	return Promise.reject(error);})
	.catch(error => {console.error(`There is a problem with your request end with error: ${error.message}`)});