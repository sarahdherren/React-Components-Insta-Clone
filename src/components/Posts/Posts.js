import React from 'react';
import Post from './Post';
import './Posts.css';


const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { posts, likePost } = props;
  
  return (
    <div className='posts-container-wrapper'>
      {posts.map(post => {
        return (
          <div> 
            <Post 
              post={post}
              likePost={likePost}
            />
          </div>
        )
      })}
      
      
    </div>
  );
}

export default Posts;
