import UserModal from "../Modals/userModal.js";
import bcrypt from 'bcrypt';
const registerUser=async(req,res)=>{
    const {username,password,firstName,lastName}=req.body;
    const salt=await bcrypt.genSalt(10);
    const hashPassword=await bcrypt.hash(password,salt);

    const newUser=new UserModal({
        username,password:hashPassword,firstName,
        lastName
    })

    try{
         await newUser.save()
         res.status(200).json(newUser);
    }
    catch(err){
           res.status(500).json({message:err.message})
    }
}

//loging 
const loginUser=async (req,res)=>{
    const {username,password}=req.body;
    try{
        const user=await UserModal.findOne({username:username})
       
        if(user){
            const validity=await bcrypt.compare(password,user.password);
          return  validity?res.status(200).json(user):res.status(400).json("wrong passoword");
        }else{
          return  res.status(400).json("user does not exist");
        }
    }catch(error){
         return res.status(500).json({message:error.message});
    }
}

export {registerUser,loginUser};