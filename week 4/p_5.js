const path = require('path');

function getFileExtension(filePath) {
  // Use the path.extname() function to extract the file extension
  const fileExtension = path.extname(filePath);

  // Remove the leading dot from the extension
  return fileExtension.slice(1);
}

// Example usage:
const filePath = '/path/to/file.txt';
const fileExtension = getFileExtension(filePath);
console.log('File Extension:', fileExtension);
