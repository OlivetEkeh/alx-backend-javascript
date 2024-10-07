/* eslint-disable */
const http = require('http');

/* Create the server and handle requests */
const app = http.createServer((req, res) => {
    /* Set the response status code to 200 (OK) */
    res.statusCode = 200;
    /* Set the response header to plain text */
    res.setHeader('Content-Type', 'text/plain');
    /* Send the response with the message "Hello Holberton School!" */
    res.end('Hello Holberton School!');
});

/* Start the server and listen on port 1245 */
app.listen(1245, () => {
    /* Log message indicating that the server is running */
    console.log('Server is listening on port 1245');
});

/* Export the app variable */
module.exports = app;
