import React from 'react';

const inputUser = (props) => {
  return (
    <input type="text" onChange={props.change} value={props.currentUsername} />
  );
}

export default inputUser;
