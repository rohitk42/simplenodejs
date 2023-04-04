/**
 * 
 * POST user/signup
 *  it takes user info and saves it and send "register successfully"
 *  {
 *      name : "Manoj Kumar",
 *      email: "manojkumar@gmail.com",
 *      password: "secret@123"
 *  }
 * 
 *  POST user/login
 *  it should email and password and check if it exists in the saved data
 *  should return message
 * {
 *      email: "manojkumar@gmail.com",
 *      password: "secret@123"
 *  }
 * 
 *  if loggedin
 *      "loggedin succesfully"
 *  else
 *      "wrong email or password, please try again"
 * 
 *   
 * POST	blog/posts 		(Create a new blog post)
    GET 	blog/posts 		(Retrieve a list of all blog posts)
    GET 	blog/posts/:id 		(Retrieve a specific blog post by ID)
    PUT 	blog/posts/:id 		(Update an existing blog post)
    DELETE 	blog/posts/:id 		(Delete an existing blog post)

 */

const express = require('express');
const cors = require('cors');
const userRouter = require('./user/router');
const postRouter = require('./post/router');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: '*',
}));
app.use(express.json());

app.use('/user', userRouter);
app.use('/blog', postRouter);

app.listen(PORT, () => {
    console.log(`server is running...${PORT}`);
});




