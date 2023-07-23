import express from 'express';
import  {getUser, updateUser,deleteUser,followUser,unFollowUser}  from '../Controller/UserController.js';

const router=express.Router();

// router.get('/',async(req,res)=>{
//     res.send("user route");
// });

router.get('/:id',getUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);
router.put('/:id/follow',followUser);
router.put('/:id/unfollow',unFollowUser);


export default router;