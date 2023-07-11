const fs = require('fs');

// Read the file asynchronously
fs.readFile('sample.txt', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the file contents into an array of lines
  const lines = data.split('\n');

  // Array to store the matching students
  const matchingStudents = [];

  // Iterate over each line and check for the required conditions
  lines.forEach(line => {
    const [name, cgpa] = line.split(',');

    // Check if the name contains 'MA' and CGPA > 7
    if (name.includes('MA') && parseFloat(cgpa) > 7) {
      matchingStudents.push({ name, cgpa });
    }
  });

  // Print the matching students
  console.log('Matching students:');
  matchingStudents.forEach(student => {
    console.log(`Name: ${student.name}, CGPA: ${student.cgpa}`);
  });
});
