import express from 'express';
import { registerUser } from '../../../reattimeserver/Controller/AuthController';

const router=express.Router();

// router.get('/',async(req,res)=>{
//     res.send('Auth route');
// })

router.post('/register',registerUser)

export default router;