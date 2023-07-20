const path = require('path');
const fs = require('fs');

function areSameFiles(filePath1, filePath2) {
  // Resolve the absolute paths to handle relative paths correctly
  const absolutePath1 = path.resolve(filePath1);
  const absolutePath2 = path.resolve(filePath2);

  try {
    // Get the file stats for both paths
    const stats1 = fs.statSync(absolutePath1);
    const stats2 = fs.statSync(absolutePath2);

    // Compare the device and inode numbers to check if they refer to the same file
    return stats1.dev === stats2.dev && stats1.ino === stats2.ino;
  } catch (error) {
    // If an error occurs (e.g., file not found), return false
    return false;
  }
}

// Example usage:
const filePath1 = '/path/to/file1.txt';
const filePath2 = '/path/to/file2.txt';

const result = areSameFiles(filePath1, filePath2);
console.log(result ? 'The files refer to the same file.' : 'The files are different.');
