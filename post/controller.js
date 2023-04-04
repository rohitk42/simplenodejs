
let postData = [
    {
        id: 1,
        title: "how to create webserver in nodejs",
        image: "image-url",
        description: "by using express framework",
        authorName: "dinesh"
    },
    {
        id: 2,
        title: "what are url-parameters",
        image: "image-url-2",
        description: "they are part of url and stores some value",
        authorName: "pranav"
    },
    {
        id: 3,
        title: "what are middleware",
        image: "image-url-3",
        description: "they are function that is executed before route handler is called",
        authorName: "ashish"
    },
    {
        id: 4,
        title: "what are query parameter",
        image: "image-url-4",
        description: "they are used to pass information to server through url",
        authorName: "rahaman"
    },

]

function getBlogs(req, res) {
    res.json(postData);
}

function getBlogById(req, res) {
    const postId = parseInt(req.params.id);
    res.json(postData[postId-1]);
}

function createBlog(req, res) {
    const newPostData = req.body;
    postData.push(newPostData);
    res.send("added new post successfully");
}

function updateBlogById(req, res) {
    const postId = parseInt(req.params.id);
    const newPostData = req.body;
    
    console.log('print old data ', postData[postId-1])
    console.log(' print new data ', newPostData);

    postData[postId-1] = newPostData;

    res.send("updated successfully post : " + postId);
}

function deleteBlogById(req, res) {
    const postId = parseInt(req.params.id);

    postData = postData.filter(post => post.id !== postId);

    res.send("removed successfully post : " + postId);
}

module.exports = {
    getBlogs,
    getBlogById,
    createBlog,
    updateBlogById,
    deleteBlogById,
}
