const express = require('express');
const Posts = require('./postDb.js');
const router = express.Router();

router.get('/', async (req, res) => {
   try {
      const posts = await Posts.get(req.query);
      res.status(200).json(posts)
   } catch (error) {
      res.status(500).json({error: "Error retrieving data"})
   }
});

router.get('/:id', validatePostId, async (req, res) => {
   const { id } = req.params;
   try {
      const post = await Posts.getById(id);
      res.status(200).json(post);
   } catch (error) {
      res.status(500).json({error: "Error retrieving data"})
   }
});

router.delete('/:id', validatePostId, async (req, res) => {
   const { id } = req.params;
   try {
      const post = await Posts.remove(id);
      res.status(200).json(post);
   } catch (error) {
      res.status(500).json({error: "Error deleting data"})
   }
});

router.put('/:id', validatePostId, async (req, res) => {
   const { id } = req.params;
   const { body } = req;
   try {
      const post = await Posts.update(id, body);
      res.status(200).json(post);
   } catch (error) {
      res.status(500).json({error: "Error updating data"})
   }
});

// custom middleware
async function validatePostId(req, res, next) {
   try {
      const { id } = req.params;
      const post = await Posts.getById(id);
      if (post) {
         req.post = post;
         next();
      } else {
         res.status(400).json({message: "invalid post id"})
      }
   } catch {
      res.status(500).json({error: "Something went wrong"})
   }
};

module.exports = router;