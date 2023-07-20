import React from 'react'
import './Home.css';
import ProfileSide from '../../Components/Profile/ProfileSide';
import PostSide from '../../Components/PostSide/PostSide';
import RightSide from '../../Components/RightSide/RightSide';
const Home = () => {
  return (
    <div className='Home'>
        <div className="profileSide">
          <ProfileSide/>
        </div>
        <div className="postSide">
          <PostSide/>
        </div>
        <div className="RightSide">
          <RightSide/>
        </div>
    </div>
  )
}

export default Home