const express = require('express');
const postFunctions = require('./controller');

const postRouter = express.Router();

// CRUD apis over blog post
postRouter.get('/posts', postFunctions.getBlogs)
postRouter.post('/posts', postFunctions.createBlog)
postRouter.get('/posts/:id', postFunctions.getBlogById)
postRouter.put('/posts/:id', postFunctions.updateBlogById)
postRouter.delete('/posts/:id', postFunctions.deleteBlogById)

module.exports = postRouter;

// PUT /posts/3