import React from 'react'
import Logo from '../../img/logo.png';
import {AiOutlineSearch} from "react-icons/ai";
import "./LogoSearch.css";
const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
        <img src={Logo} alt="" />
        <div className="Search">
            <input type="text" placeholder='#Explore' />
            <div className="s-icon">
              <AiOutlineSearch/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch