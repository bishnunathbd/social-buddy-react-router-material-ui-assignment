import React, { useEffect, useState } from 'react';

const Comment = (props) => {
  const { name, body, email, id } = props.comment;
  
  const [randomUser, setRandomUser] = useState({});

  useEffect(() => { 
    // random user
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setRandomUser(data.results[0]))
  }, [])

  const singleCommentStyle = {
    display: 'flex',
    width: '60%',
    border: '1px solid purple',
    borderRadius: '20px',
    margin: '10px auto',
    padding: '10px',
    textAlign: 'left'
  };
  return (
    <div style={singleCommentStyle}>
      <div>
        <img src={randomUser.picture && randomUser.picture.medium} style={{ borderRadius: '50%' }} alt="" />
        {/* src={randomUser.picture?.medium} */}
      </div>
      <div>
        <h4>{name}</h4>
        <p><small>{email}</small></p>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Comment;