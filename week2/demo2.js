const fs = require('fs');

function findStudentsWithMAAndCGPA(filePath, searchString, minCGPA) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err.message);
      return;
    }

    const lines = data.split('\n');
    const students = [];

    for (const line of lines) {
      const [name, course, cgpa] = line.split(' ');

      if (name.toUpperCase().includes(searchString.toUpperCase()) && parseFloat(cgpa) > minCGPA) {
        students.push({ name, course, cgpa });
      }
    }

    console.log('Students whose name contains "MA" and CGPA >', minCGPA);
    console.log(students);
  });
}

const filePath = 'sample.txt';
const searchString = 'MA';
const minCGPA = 7.0;

findStudentsWithMAAndCGPA(filePath, searchString, minCGPA);
