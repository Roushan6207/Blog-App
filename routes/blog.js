const express= require("express");
const router = express.Router();

//import controller...
const {createComment}=require("../controllers/CommentController");



// mapping create of  router...
router.post("/comments/create",createComment);


//export the router...
module.exports=router;