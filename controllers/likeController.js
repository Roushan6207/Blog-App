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
        const updatedPost= await Post.findByIdAndUpdate(post,{$push: {likes:savedLike._id}}, {new:true})
        .populate("comments").populate("likes").exec();
           
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


 // unlike a post...

 exports.unlikePost= async (req,res) =>{
   try{

    const {post,like}=req.body;
    //find and delete the like collections me se

    const  deletedLike= await Like.findOneAndDelete({post:post,_id:like});

    //update the post collections...
    const updatedPost=await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true});

    res.json({
        post:updatedPost,
    });

   }



   catch(error){
    return res.status(500).json({
        error:"Error While  unliking the post",
    });
   }

 };

