const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/sum') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { num1, num2 } = JSON.parse(body);

      // Check if the inputs are valid numbers
      if (isNaN(num1) || isNaN(num2)) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid input. Please provide valid numbers.' }));
      } else {
        const sum = parseFloat(num1) + parseFloat(num2);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ sum }));
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
