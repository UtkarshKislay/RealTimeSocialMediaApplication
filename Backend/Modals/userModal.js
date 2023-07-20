import mongoose from "mongoose";
const UserSchama=mongoose.Schema({
    username:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        tyep:String,
        required:true
    },
    isAdmin:{
        type:String,
        defualt:false
    },
    profilePicture:String,
    coverPicture:String,
    about:String,
    livsin:String,
    worksAt:String,
    realtionship:String,
    followers:[],
    following:[]

},
{timestamps:true}

)

const UserModal=mongoose.model('users',UserSchama);
export default UserModal;