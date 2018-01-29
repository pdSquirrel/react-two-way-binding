import React from 'react';
import './OutputUser.css';

const outputUser = (props) => {
  return (
    <div>
      <strong>Username:</strong> {props.username}
    </div>
  );
}

export default outputUser;
