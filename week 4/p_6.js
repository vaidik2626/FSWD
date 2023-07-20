const path = require('path');
const readline = require('readline');

// Create an interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function extractDirectoryAndBaseName(filePath) {
  // Use the path.dirname() function to extract the directory name
  const directoryName = path.dirname(filePath);

  // Use the path.basename() function to extract the base name
  const baseName = path.basename(filePath);

  return { directoryName, baseName };
}

// Example usage:
rl.question('Enter a file path: ', (filePath) => {
  const { directoryName, baseName } = extractDirectoryAndBaseName(filePath);
  console.log('Directory Name:', directoryName);
  console.log('Base Name:', baseName);
  rl.close();
});
