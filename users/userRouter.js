const express = 'express';
const Users = require('./userDb.js');
const router = express.Router();

router.post('/', (req, res) => {
   try {
      
   } catch (error) {
      res.status(500).json({error: "Error retrieving data"})
   }
});

router.post('/:id/posts', (req, res) => {
   try {

   } catch (error) {
      res.status(500).json({error: "Error retrieving data"})
   }
});

router.get('/', (req, res) => {
   try {
      
   } catch (error) {
      res.status(500).json({error: "Error retrieving data"})
   }
});

router.get('/:id', (req, res) => {
   try {

   } catch (error) {
      res.status(500).json({error: "Error retrieving data"})
   }
});

router.get('/:id/posts', (req, res) => {
   try {

   } catch (error) {
      res.status(500).json({error: "Error retrieving data"})
   }
});

router.delete('/:id', (req, res) => {
   try {

   } catch (error) {
      res.status(500).json({error: "Error retrieving data"})
   }
});

router.put('/:id', (req, res) => {
   try {

   } catch (error) {
      res.status(500).json({error: "Error retrieving data"})
   }
});

//custom middleware
function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
