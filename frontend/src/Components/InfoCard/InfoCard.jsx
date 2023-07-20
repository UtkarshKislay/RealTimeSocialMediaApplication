import React, { useState } from 'react'
import "./InfoCard.css"
import {AiOutlineEdit} from 'react-icons/ai';
import ProfileModel from '../ProfileModel/ProfileModel';
const InfoCard = () => {
    const [modelOpened,setModelOpened]=useState(false);
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Your Info</h4>
            <div>

              <AiOutlineEdit onClick={
                ()=>setModelOpened(true)
              } />
              <ProfileModel modelOpened={modelOpened}
                setModelOpened={setModelOpened}
               />
            </div>
        </div>
        <div className="info">
            <span>
                <b>Status</b>
            </span>
            <span>In Relationship</span>
        </div>

        <div className="info">
            <span>
                <b>Lives in</b>
            </span>
            <span>India</span>
        </div>

        <div className="info">
            <span>
                <b>Work at</b>
            </span>
            <span>@iow</span>
        </div>

        <button className='button logout-button'>Logout</button>
    </div>
  )
}

export default InfoCard