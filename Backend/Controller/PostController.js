import PostModal from "../Modals/postModal.js";
import UserModel from '../Modals/userModal.js';
import mongoose from "mongoose";



export const createPost=async(req,res)=>{
    const newPost=new PostModal(req.body);
    try{

        await newPost.save();
        res.status(200).json("Post Createed");

    }catch(err){
     res.status(500).json(err);
    }
    
}

export const getPost=async(req,res)=>{
    const id=req.params.id;
    try{
      const post=await PostModal.findById(id);
      res.status(200).json(post);
    }catch(err){
       res.status(500).json(err);
    }
}

export const updatePost=async(req,res)=>{
    const postId=req.params.id;
    const {userId}=req.body;
    try{
      const post=await PostModal.findById(postId);
      if(post.userId===userId){
        await post.updateOne({$set:req.body});
        res.status(200).json("post updated");
      }else{
        res.status(403).josn("Action forbidden");
      }
    }catch(err){
        res.status(500).json(err);
    }
}

export const deletePost=async(req,res)=>{
    const id=req.params.id;
    const {userId}=req.body;

    try{
    const post=await PostModal.findById(id);
    if(post.userId===userId){
       await post.deleteOne();
       res.status(200).json("Post deleted successfully");
    }else{
        res.status(403).json("Action forbidden");
    }
         
    }catch(err){
        res.status(500).json(err);
    }
}

export const likePost=async(req,res)=>{
    const id=req.params.id;
    const {userId}=req.body;
    try{
     const post=await PostModal.findById(id);
     if(!post.likes.includes(userId)){
       await post.updateOne({$push:{likes:userId}});
       res.status(200).json("post liked");
     }else{
        await post.updateOne({$pull:{likes:userId}});
       res.status(200).json("post Unliked");
     }
     
    }catch(err){
        res.status(500).json(err);
    }
}

export const getTimeLinePost=async(req,res)=>{
    const userId=req.params.id;
    try{
     const currentUserPost=await PostModal.find({userId:userId});
     const followingPosts=await UserModel.aggregate([
        {
            $match:{
                _id:e=new mongoose.Types.ObjectId(userId)

        }
        },{
            $lookUp:{
                from:"post",
                localField:"following",
                foreignField:"userId",
                as:"followingPosts"
            }
        },{
           $project:{
            followingPosts:1,
            _id:0
           }
        }
     ])
     res.status(200).json(currentUserPost.concate(...followingPosts))
     .sort((a,b)=>{
        return b.createdAt-a.createdAt;
     })

    }catch(err){
        res.status(500).json(err);
    }
}