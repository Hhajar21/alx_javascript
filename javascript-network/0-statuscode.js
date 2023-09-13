#!/usr/bin/node
/**
 * Write a script that display the status code of a GET request.
 */


const request = require('request');


if (process.argv.length !== 3) {
  console.error('Usage: node 0-statuscode.js <URL>');
  process.exit(1);
}

const url = process.argv[2];


request.get(url, (error, response) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  
  console.log(`code: ${response.statusCode}`);
});