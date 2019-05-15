const express = require('express');
const server = express();

server.use(logger);
server.use(validateUserId);
server.use(validateUser);
server.use(validatePost);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method}, ${req.get('host')}, ${Date()}`);
  next();
};

function validateUserId(req, res, next) {

}

function validateUser(req, res, next) {

}

function validatePost(req, res, next) {

}

module.exports = server;
