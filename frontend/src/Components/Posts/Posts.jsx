import React from 'react'
import './Posts.css';
import Post from '../Post/Post';
import { PostData } from '../../Data/Posdata';
const Posts = () => {
  return (
    <div className='Posts'>
         {PostData.map((post,id)=>{
            return <Post data={post} id={id}/>
         })}
    </div>
  )
}

export default Posts;