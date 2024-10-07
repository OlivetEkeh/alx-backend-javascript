/* 3-read_file_async.js */
const fs = require('fs').promises;

/* eslint-disable */
const countStudents = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8')
            .then((data) => {
                /* eslint-disable */
                const lines = data.split('\n').filter(line => line.trim() !== '');
                if (lines.length === 0) {
                    console.log('Number of students: 0');
                    return resolve();
                }

                /* eslint-disable */
                /* Remove the header and initialize variables */
                const header = lines.shift();
                const students = {};
                let totalStudents = 0;

                /* eslint-disable */
                /* Process each line and categorize students by field */
                lines.forEach((line) => {
                    const [firstname, , , field] = line.split(',');
                    if (field) {
                        if (!students[field]) {
                            students[field] = [];
                        }
                        students[field].push(firstname);
                        totalStudents += 1;
                    }
                });

                /* eslint-disable */
                /* Log the total number of students */
                console.log(`Number of students: ${totalStudents}`);

                /* eslint-disable */
                /* Log the number of students and list of names in each field */
                for (const [field, names] of Object.entries(students)) {
                    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
                }

                resolve();
            })
            .catch(() => {
                /* eslint-disable */
                reject(new Error('Cannot load the database'));
            });
    });
};

/* eslint-disable */
module.exports = countStudents;
