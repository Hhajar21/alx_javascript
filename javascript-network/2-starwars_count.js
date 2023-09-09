#!/usr/bin/node
/**
 * Star Wars Movie Character Count
 * 
 * This script prints the number of movies where the character "Wedge Antilles" is present.
 */

const request = require('request');
if (process.argv.length !== 3) {
  console.error('Usage: node 2-starwars_count.js <API URL>');
  process.exit(1);
}
const apiUrl = process.argv[2];
const characterId = 18; 
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Status code ${response.statusCode}`);
    process.exit(1);
  }
  try {
    const filmData = JSON.parse(body);
    const filmsWithWedgeAntilles = filmData.results.filter((film) =>
      film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    );

    console.log(filmsWithWedgeAntilles.length);
  } catch (parseError) {
    console.error(`Error parsing JSON: ${parseError.message}`);
    process.exit(1);
  }
});
