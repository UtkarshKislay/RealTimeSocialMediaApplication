import UserModal from "../Modals/userModal.js";
import bcrypt from 'bcrypt';
const getUser=async(req,res)=>{
    const id=req.params.id;

    try{
        const user=await UserModal.findById(id);
        if(user){
            const {password,...otherdDetails}=user._doc
            res.status(200).json(otherdDetails);
        }else{
            res.status(404).json("No user exist");
        }
    }catch(err){
      res.status(500).json(err);
    }
}

const updateUser=async(req,res)=>{
    const id=req.params.id;
    const {currentUser,currentUserAdminStatus,password}=req.body;
    if(id===currentUser || currentUserAdminStatus){
        try{
            if(password){
                const salt=bcrypt.genSalt(10);
                req.body.password=await bcrypt.hash(password,salt);
            }
          const user=await UserModal.findByIdAndUpdate(id,req.body,{new:true});
           res.status(200).json(user);
        }catch(err){
           res.status(500).json(err);
        }
    }else{
        res.status(403).json("access denied");
    }
}

const deleteUser=async(req,res)=>{
    const id=req.params.id;
    const {currentUserId,currentUserAdminStatus}=req.body;
    if(currentUserId===id || currentUserAdminStatus){
        try{

            await UserModal.findbyIdAndDelete(id);
            res.status(200).json("user deleted successfully");

        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("access denied");
    }
}

const followUser=async(req,res)=>{
    const id=req.params.id;
    const {currentUserId}=req.body;
    if(currentUserId===id){
        res.status(403).json("Action forbidden");
    }else{
        try{
            const followUser=await UserModal.findById(followUser);
            const followingUser=await UserModal.findById(currentUserId);
            if(!followUser.followers.include(currentUserId)){
                await followUser.updateOne({$push:{followers:currentUserId}});
                await followingUser.updateOne({$push:{followingUser:id}});
                res.status(200).json("user followed");
            }else{
                res.status(403).json("user is aleady followed by you");
            }

        }catch(err){
            res.status(500).json(err);
        }
    }
}
const unFollowUser=async(req,res)=>{
    const id=req.params.id;
    const {currentUserId}=req.body;
    if(currentUserId===id){
        res.status(403).json("Action forbidden");
    }else{
        try{
            const followUser=await UserModal.findById(followUser);
            const followingUser=await UserModal.findById(currentUserId);
            if(followUser.followers.include(currentUserId)){
                await followUser.updateOne({$pll:{followers:currentUserId}});
                await followingUser.updateOne({$pull:{followingUser:id}});
                res.status(200).json("user unFollowed");
            }else{
                res.status(403).json("user is not followed by you");
            }

        }catch(err){
            res.status(500).json(err);
        }
    }
}

export {getUser,updateUser,deleteUser,followUser,unFollowUser};