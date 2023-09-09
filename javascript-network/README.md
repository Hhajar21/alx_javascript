
Project Title: JavaScript Network Programming
Introduction
We are excited to announce that we will be moving our communication platform from Slack to Discord in a few days! 🎉 This transition will help streamline our project management and collaboration efforts. In this project, you will be working on various JavaScript network programming tasks to enhance your skills and knowledge.

Important Notice
We're moving to Discord! Please make sure to join our Discord server for future communications. Click here for more information and the invitation link.

Project Badge
Project Badge

Project Details
Author: Guillaume, CTO at Holberton School
Weight: 1
Learning Objectives
By completing this project, you are expected to gain the following knowledge and skills:

General
Understand the amazing capabilities of JavaScript programming.
Manipulate JSON data effectively.
Utilize the request and fetch APIs for making HTTP requests.
Learn how to read and write files using the fs module.
Requirements
General
Recommended Editors: Visual Studio Code
All your files will be interpreted on Ubuntu 20.04 LTS using Node.js (version 14.x).
Ensure that all your code files end with a new line.
Include a README.md file at the root of the project folder.
Your code should adhere to the semistandard style, which includes Standard rules with semicolons.
The length of your files will be tested using wc.
You are not allowed to use var.
Getting Started
Before you begin working on the tasks, please ensure you have the necessary setup:

Node.js: Install Node.js version 14.x on your system.
Editor: Use Visual Studio Code or your preferred code editor.
Task Overview
0. Status Code (0-statuscode.js)
Write a script that displays the status code of a GET request.
The script takes the URL to request (GET) as the first argument.
The status code must be printed in the format: code: <status code>.
You must use the request module.
shell
Copy code
$ node 0-statuscode.js https://intranet.alxswe.com/status
code: 200
$ node 0-statuscode.js https://intranet.alxswe.com/doesnt_exist
code: 404
1. Star Wars Movie Title (1-starwars_title.js)
Write a script that prints the title of a Star Wars movie based on a given episode number.
The script takes the movie ID as the first argument.
Use the Star Wars API with the endpoint https://swapi-api.alx-tools.com/api/films/:id.
You must use the request module.
shell
Copy code
$ node 1-starwars_title.js 1
A New Hope
$ node 1-starwars_title.js 5
Attack of the Clones
2. Star Wars Wedge Antilles (2-starwars_count.js)
Write a script that prints the number of movies in which the character "Wedge Antilles" is present.
The script takes the API URL of the Star Wars API (https://swapi-api.alx-tools.com/api/films/) as the first argument.
Wedge Antilles is character ID 18; your script must use this ID for filtering the API result.
Use the request module.
shell
Copy code
$ node 2-starwars_count.js https://swapi-api.alx-tools.com/api/films
3
3. Loripsum (3-request_store.js)
Write a script that gets the contents of a webpage and stores it in a file.
The script takes the URL to request as the first argument and the file path to store the body response as the second argument.
The file must be UTF-8 encoded.
Use the request module.
shell
Copy code
$ node 3-request_store.js http://loripsum.net/api loripsum
$ cat loripsum
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Haec quo modo conveniant, non sane intellego. ...
4. How Many Completed? (4-completed_tasks.js)
Write a script that computes the number of tasks completed by user ID.
The script takes the API URL (https://jsonplaceholder.typicode.com/todos) as the first argument.
Only print users with completed tasks.
Use the request module.
shell
Copy code
$ node 4-completed_tasks.js https://jsonplaceholder.typicode.com/todos
{ '1': 11,
  '2': 8,
  '3': 7,
  '4': 6,
  '5': 12,
  '6': 6,
  '7': 9,
  '8': 11,
  '9': 8,
  '10': 12 }
5. Who Was Playing in This Movie? (5-starwars_characters.js)
Write a script that prints all characters of a Star Wars movie based on its ID.
The script takes the Movie ID as the first argument.
Display one character name per line.
Use the Star Wars API.
Use the request module.
shell
Copy code
$ node 5-starwars_characters.js 3
Darth Vader
R2-D2
Luke Skywalker
Han Solo
Leia Organa
Chewbacca
Palpatine
Obi-Wan Kenobi
Jabba Desilijic Tiure
Wedge Antilles
Yoda
Boba Fett
Ackbar
Arvel Crynyd
Mon Mothma
Nien Nunb
Wicket Systri Warrick
Bib Fortuna
C-3PO
Lando Calrissian
Score
Your score for this project will be updated once you launch the project review. Good luck with your tasks, and if you have any questions or need assistance, feel free to reach out to us!

Previous Project
Copyright © 2023 ALX, All rights reserved.




