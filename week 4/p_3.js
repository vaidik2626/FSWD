const querystring = require('querystring');
const readline = require('readline');

// Create an interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for a URL with a query string
rl.question('Enter a URL with a query string: ', (urlWithQueryString) => {
  // Extract the query string from the URL
  const queryString = urlWithQueryString.split('?')[1];

  // Parse the query string using the querystring module
  const parsedQuery = querystring.parse(queryString);

  // Display the extracted key-value pairs
  console.log('Extracted Key-Value Pairs:');
  for (const key in parsedQuery) {
    console.log(`${key}: ${parsedQuery[key]}`);
  }
  rl.close();
});
