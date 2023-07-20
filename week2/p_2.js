const http = require('http');

const server = http.createServer((req, res) => {
  if (req.headers['content-type'] === 'application/json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'This is a JSON response.' }));
  } else if (req.headers['content-type'] === 'text/html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>This is an HTML response.</h1>');
  } else {
    res.writeHead(415, { 'Content-Type': 'text/plain' });
    res.end('Unsupported Media Type');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});


const http = require('http');

const server = http.createServer((req, res) => {
  const statusCode = parseInt(req.url.split('/')[1]);

  if (statusCode >= 100 && statusCode < 600) {
    res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
    res.end(`Response with status code ${statusCode}`);
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Invalid Status Code');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});



const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is a GET request.');
  } else if (req.method === 'POST') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is a POST request.');
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
