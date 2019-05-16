const express = require('express');
const Users = require('./userDb.js');
const router = express.Router();

router.post('/', validateUser, async (req, res) => {
   try {
      const user = await Users.insert(req.body);
      res.status(201).json(user);
   } catch (error) {
      res.status(500).json({error: "Error retrieving data"})
   } 
});

router.post('/:id/posts', validateUserId, validatePost, async (req, res) => {
   try {
       
   } catch (error) {
      res.status(500).json({error: "Error retrieving data"})
   }
});

router.get('/', async (req, res) => {
   try {
      const users = await Users.get(req.query);
      res.status(200).json(users);
   } catch (error) {
      res.status(500).json({error: "Error retrieving data"})
   }
});

router.get('/:id', validateUserId, async (req, res) => {
   const { id } = req.params;
   try {
      const user = await Users.getById(id);
      res.status(200).json(user);
   } catch (error) {
      res.status(500).json({error: "Error retrieving data"})
   }
});

router.get('/:id/posts', validateUserId, async (req, res) => {
   const { id } = req.params;
   try {
      const userposts = await Users.getUserPosts(id);
      res.status(200).json(userposts);
   } catch (error) {
      res.status(500).json({error: "Error retrieving data"})
   }
});

router.delete('/:id', validateUserId, async (req, res) => {
   const { id } = req.params;
   try {
      const user = await Users.remove(id);
      res.status(200).json(user);
   } catch (error) {
      res.status(500).json({error: "Error retrieving data"})
   }
});

router.put('/:id', validateUserId, validateUser, async (req, res) => {
   const { id } = req.params;
   const { body } = req;
   try {
      const user = await Users.update(id, body);
      res.status(200).json(user);
   } catch (error) {
      res.status(500).json({error: "Error retrieving data"})
   }
});

//custom middleware
async function validateUserId(req, res, next) {
   try {
      const { id } = req.params;
      const user = await Users.getById(id);
      if(user) {
         req.user = user;
         next();
      } else {
         res.status(400).json({message: "invalid user id"})
      }
   } catch {
      res.status(500).json({error: "Something went wrong"})
   }
};

async function validateUser(req, res, next) {
   try {
      const { body } = req;
      const { name } = body;
      if (body && Object.keys(body).length) {
         if(name) {
            next();
         } else {
            res.status(400).json({message: "Missing required name field"})
         }
      } else {
         res.status(400).json({message: "Missing user data"})
      }
   } catch {
      res.status(500).json({error: "Something went wrong"})
   }
};

async function validatePost(req, res, next) {
   try {
      const { body } = req;
      const { text } = body;
      if (body && Object.keys(body).length) {
         if (text) {
            next();
         } else {
            res.status(400).json({message: "Missing required text field"})
         }
      } else {
         res.status(400).json({message: "Missing post data"})
      }
   } catch {
      res.status(500).json({error: "Something went wrong"})
   }

};

module.exports = router;
