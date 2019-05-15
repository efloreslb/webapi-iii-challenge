const express = require('express');

const postsRouter = require('./posts/postRouter.js');

const server = express();

//built in middleware
server.use(express.json());

//custom middleware
server.use(logger);

server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware functions
function logger(req, res, next) {
  console.log(`${req.method}, ${req.get('host')}, ${Date()}`);
  next();
};

module.exports = server;
