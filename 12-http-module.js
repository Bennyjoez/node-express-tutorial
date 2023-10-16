// node has built in modules
// os
// path
// fs
// http

// to get information on inbuilt modules, go to the official documentation on node

// HTTP Module
const http = require('http');
const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end('Welcome to our homepage!')
  }
  if(req.url === '/about') {
    res.end('Here is our short history')
  }
  res.end(`
    <h1>Ooops!</h1>
    <p>We can't find the page you are looking for!</p>
    <a href='/'>Back Home</a>
  `)
});

// set where our server will be listening at
server.listen(5000);