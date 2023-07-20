import React from 'react'
import "./Auth.css";
import Logo from '../../img/logo.png';
const Auth = () => {
  return (
    <div className="Auth">
       <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
            <h1>ZKC media</h1>
            <h6>Explore the ideas throught the world</h6>
        </div>
       </div>
       <div>
        {/* <SingUp/> */}
        <Login/>
       </div>
    </div>
  )
}


function Login(){
  return(
    <div className="a-right">
      <form  className='infoForm' action="">
       <h3>Login</h3>
       
       <div>
        <input type="text" className="infoInput" name='userNmae'
        placeholder='UserName' />
       </div>
       <div>
        <input type="text" className="infoInput" name='password'
        placeholder='Password' />
       
       </div>

       <div>
        <span style={{fontSize:"12px"}}>
         Don't have an account. SignUp!
        </span>
       </div>
       <button type='submit' className='button infoButton'>SignUp</button>
      </form>
    </div>
  )
}

function SingUp(){
  return(
    <div className="a-right">
      <form  className='infoForm' action="">
       <h3>Sign Up</h3>
       <div>
        <input type="text" placeholder='First Name'
        className='infoInput' name='firstName' />
           <input type="text" placeholder='First Name'
        className='infoInput' name='firstName' />
       </div>
       <div>
        <input type="text" className="infoInput" name='userNmae'
        placeholder='UserName' />
       </div>
       <div>
        <input type="text" className="infoInput" name='password'
        placeholder='Password' />
        <input type="text" className="infoInput" name='ConfirmPassword'
        placeholder='Confirm Password' />
       </div>

       <div>
        <span style={{fontSize:"12px"}}>
          Already have an Acoount.Login!
        </span>
       </div>
       <button type='submit' className='button infoButton'>SignUp</button>
      </form>
    </div>
  )
}
export default Auth