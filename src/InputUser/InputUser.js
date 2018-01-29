import React from 'react';
import { Input } from 'semantic-ui-react';


const inputUser = (props) => {
  return (
    <Input type="text" onChange={props.change} value={props.currentUsername} />
  );
}

export default inputUser;
