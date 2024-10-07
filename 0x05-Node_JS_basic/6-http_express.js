/* eslint-disable */
const express = require('express');

/* Create an instance of the express application */
const app = express();

/* Define a route for the root URL ("/") */
app.get('/', (req, res) => {
    /* Send a plain text response */
    res.send('Hello Holberton School!');
});

/* Start the server and listen on port 1245 */
app.listen(1245, () => {
    console.log('Express server is listening on port 1245');
});

/* Export the app variable */
module.exports = app;
