const express= require("express");
const router = express.Router();

//import controller...
const {createComment}=require("../controllers/CommentController");
const { createPost, getAllPosts } = require("../controllers/PostController");




// mapping create of  router...
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);


//export the router...
module.exports=router;