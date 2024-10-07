/* eslint-disable */
const http = require('http');
const fs = require('fs');
const { promisify } = require('util');

/* Promisify the fs.readFile method for async/await support */
const readFileAsync = promisify(fs.readFile);

/* Create the function to count students (similar to the one from 3-read_file_async.js) */
const countStudents = async (filePath) => {
    try {
        /* Read the file content */
        const data = await readFileAsync(filePath, 'utf-8');
        /* Split data into lines and filter out empty lines */
        const lines = data.split('\n').filter(line => line.trim() !== '');
        /* Extract the header and students data */
        const header = lines.shift().split(',');
        const fieldIndex = header.indexOf('field');
        const firstNameIndex = header.indexOf('firstname');

        /* Create a map to store students by their fields */
        const studentGroups = {};

        lines.forEach(line => {
            const values = line.split(',');
            const field = values[fieldIndex];
            const firstName = values[firstNameIndex];

            /* Add the student to the corresponding field */
            if (!studentGroups[field]) {
                studentGroups[field] = [];
            }
            studentGroups[field].push(firstName);
        });

        /* Calculate total number of students */
        const totalStudents = lines.length;
        console.log(`Number of students: ${totalStudents}`);

        /* Create the response text */
        let result = `Number of students: ${totalStudents}\n`;
        for (const [field, students] of Object.entries(studentGroups)) {
            result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        }

        return result.trim();
    } catch (error) {
        throw new Error('Cannot load the database');
    }
};

/* Create the server and handle requests */
const app = http.createServer(async (req, res) => {
    /* Set the response header to plain text */
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        /* Handle the root route */
        res.statusCode = 200;
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        /* Handle the /students route */
        const filePath = process.argv[2];

        if (!filePath) {
            res.statusCode = 400;
            res.end('Database file path is missing');
            return;
        }

        try {
            const studentData = await countStudents(filePath);
            res.statusCode = 200;
            res.end(`This is the list of our students\n${studentData}`);
        } catch (error) {
            res.statusCode = 500;
            res.end(error.message);
        }
    } else {
        /* Handle 404 for other routes */
        res.statusCode = 404;
        res.end('Not Found');
    }
});

/* Start the server and listen on port 1245 */
app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

/* Export the app variable */
module.exports = app;
