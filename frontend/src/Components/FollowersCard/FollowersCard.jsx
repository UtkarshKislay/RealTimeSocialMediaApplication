import React from 'react'
import './FollowersCard.css';
import { Followers } from '../../Data/FollowersData';
const FollowersCard = () => {
  return (
    <div className='FollowersCard'>
        <h3>Who is Following you</h3>
        {Followers.map((followers,id)=>{
           return (
            <div className="follower">
                <div>
                    <img src={followers.img} alt=""  className='followersImg'/>
                    <div className="name">
                        <span>{followers.name}</span>
                        <span>@{followers.username}</span>
                    </div>
                </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
            </div>
           ) 
        })}
    </div>
  )
}

export default FollowersCard