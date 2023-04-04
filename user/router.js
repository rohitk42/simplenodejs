const express = require('express');
const userController = require('./controller');

const userRouter = express.Router();

// user signup and user login
userRouter.post('/signup', userController.signup);
userRouter.post('/login', userController.login);

module.exports = userRouter;


