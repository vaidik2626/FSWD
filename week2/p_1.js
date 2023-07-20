const http = require('http');

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response content type
  res.setHeader('Content-Type', 'text/plain');

  // Send a simple message as the response
  res.end('Hello, this is a simple HTTP server!');
});

// Define the port to listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});