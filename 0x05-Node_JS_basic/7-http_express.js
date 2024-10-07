/* eslint-disable */
const express = require('express');
const countStudents = require('./3-read_file_async');

/* Create an instance of the express application */
const app = express();

/* Define a route for the root URL ("/") */
app.get('/', (req, res) => {
    /* Send a plain text response */
    res.send('Hello Holberton School!');
});

/* Define a route for "/students" */
app.get('/students', (req, res) => {
    const database = process.argv[2]; // Get the database file path from command line arguments

    /* Set initial response */
    res.write('This is the list of our students\n');

    /* Use the countStudents function to get student data */
    countStudents(database)
        .then((data) => {
            /* Write the data returned from countStudents */
            res.write(data);
            res.end();
        })
        .catch((error) => {
            /* Handle error if database cannot be read */
            res.write(error.message);
            res.end();
        });
});

/* Start the server and listen on port 1245 */
app.listen(1245, () => {
    console.log('Express server is listening on port 1245');
});

/* Export the app variable */
module.exports = app;
