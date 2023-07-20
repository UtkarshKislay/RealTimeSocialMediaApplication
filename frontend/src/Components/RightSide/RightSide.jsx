import React from 'react'
import "./RightSide.css";
import Home from '../../img/home.png';
import Noti from '../../img/noti.png';
import Comment from '../../img/comment.png';
import {AiFillSetting} from 'react-icons/ai';
import TrendCard from '../TrendCard/TrendCard';
import { useState } from 'react';
import ShareModel from '../ShareModel/ShareModel';


const RightSide = () => {
  const [modelOpened,setModelOpened]=useState(false);
  return (
    <div className='RightSide'>
        <div className="navIcons">
            <img src={Home} alt="" />
            <AiFillSetting className='icon-setting'/>
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />
        </div>
        <TrendCard/>
        <button className='button r-button'
          onClick={()=>setModelOpened(true)}
        >
          
            Share
        </button>
        <ShareModel 
           modelOpened={modelOpened}
           setModelOpened={setModelOpened}
          />
    </div>
  )
}

export default RightSide