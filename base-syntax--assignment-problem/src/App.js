import React, { Component } from 'react';
import './App.css';

import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {

  state = {
    username: [
      'Kartik',
      'Mahesh',
      'Rao',
    ]
  }

  nameChangeHandler = (event) => {
    this.setState(
      {     
        username: [
        event.target.value,
        'Mahesh',
        'Rao',
      ]
     }
    );
  }
  render() {
    return (
      <div className="App">
        <ol>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput click={this.nameChangeHandler} name={this.state.username[0]}/>
        <UserOutput username = {this.state.username[0]}/>
        <UserOutput username = {this.state.username[1]}/>
        <UserOutput username = {this.state.username[2]}/>
      </div>

    );
  }
}

export default App;
