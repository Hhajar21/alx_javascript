#!/usr/bin/node
/**
 * Write a script that gets the contents of a webpage and stores it in a file.
 */


const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];



request(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
  
  } else {
    fs.writeFile(filePath, body, 'utf-8', (err) => {
      if (err) {
        console.error(`Error writing to file: ${err}`);
      } else {
        console.log(`Contents of ${url} have been saved to ${filePath}`);
      }
    });
  }
});
