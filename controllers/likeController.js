 //import models...
 const Post=require("../models/postModel");
 const Like=require("../models/likeModel");

 //like a post

 exports.likePost= async (req,res) =>{
    try{
        
        const {post,user}=req.body;
        const like= new Like({
            post,user,
        });
        const savedLike=await like.save();

        //update the post collections basis on this..
        const updatedPost= await Post.findByIdAndUpdate(post,{$push: {likes:savedLike._id}}, {new:true});
           
        res.json({
            post:updatedPost,
        })
    }

    catch(error){
        return res.status(500).json({
            error:"Error While  liking the post",
        });
    }
 };