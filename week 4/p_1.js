const readline = require('readline');
const url = require('url');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a URL: ', (userInput) => {
  const parsedUrl = url.parse(userInput, true);

  console.log('Protocol:', parsedUrl.protocol);
  console.log('Host:', parsedUrl.host);
  console.log('Path:', parsedUrl.pathname);

  const queryParameters = parsedUrl.query;
  if (Object.keys(queryParameters).length > 0) {
    console.log('Query Parameters:');
    for (const [key, value] of Object.entries(queryParameters)) {
      console.log(`${key}: ${value}`);
    }
  } else {
    console.log('No Query Parameters found.');
  }

  rl.close();
});
