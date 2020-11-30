import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {
  let { postId } = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // const url = 
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])

  const singlePostStyle = {
    width: '80%',
    boxShadow: '5px 5px 10px blue',
    borderRadius: '20px',
    margin: '20px auto',
    padding: '20px',
    textAlign: 'left'
  };

  return (
    <div>
      <div style={singlePostStyle}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      {
        comments.map(comment => <Comment comment={comment}></Comment>)
      }
    </div>

  );
};

export default PostDetail;