import React, { useState } from 'react';

const Comment = (props) => {
  const { name, body, email, id } = props.comment;
  const profileImage = `https://randomuser.me/api/portraits/thumb/men/${id}.jpg`

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
        <img src={profileImage} style={{borderRadius: '50%'}} alt="" />
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