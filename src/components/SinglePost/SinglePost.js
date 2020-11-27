import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const SinglePost = (props) => {
  // console.log(props);
  const { title, body, id } = props.post;

  const singlePostStyle = {
    width: '80%',
    boxShadow: '5px 5px 10px blue',
    borderRadius: '20px',
    margin: '20px auto',
    padding: '20px',
    textAlign: 'left'
  };

  return (
    <div style={singlePostStyle}>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link to={`/postID/${id}`}>
        <Button variant="contained" color="primary">See More</Button>
      </Link>
    </div>
  );
};

export default SinglePost;