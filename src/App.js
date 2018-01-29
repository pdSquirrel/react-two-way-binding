import React, { Component } from 'react';

import './App.css';
import InputUser from './InputUser/InputUser';
import OutputUser from './OutputUser/OutputUser';

class App extends Component {
  state = {
    username: 'elias'
  }

  changeUsernameHandler = (event) => {
    this.setState({ username: event.target.value });
  } 

  render() {
    return (
      <div className="App">
        <InputUser change={this.changeUsernameHandler} currentUsername={this.state.username} />
        <OutputUser username={this.state.username} />
      </div>
    );
  }
}

export default App;
