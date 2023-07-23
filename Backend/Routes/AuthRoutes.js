import express from 'express';
import { registerUser } from '../Controller/AuthController.js';

const router=express.Router();

// router.get('/',async(req,res)=>{
//     res.send('Auth route');
// })

router.post('/register',registerUser)

export default router;