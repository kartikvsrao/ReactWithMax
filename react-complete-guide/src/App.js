import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name:'Kartik', age:22},
      {name:'Parth', age:2},
      {name:'Steve', age:222},
    ] ,
    showPersons : false,
  }

  switchNameHandler = (newName) => {
    this.setState(
      {
        persons: [
          {name:'Kartik', age:22},
          {name:'Parth', age:22},
          {name: newName, age:222},
        ]
      }
    );
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          {name:'Kartik', age:22},
          {name: event.target.value, age:22},
          {name: 'Steve', age:222},
        ]
      }
    );
  }

  togglePersonHandler = () => {
      this.setState({
        showPersons: !this.state.showPersons
      });
  } 

  render() {
    const style = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons)
    {
      persons = (
        <div>
        <Person 
         name={this.state.persons[0].name} 
         age={this.state.persons[0].age} />
        <Person 
         name={this.state.persons[1].name} 
         age={this.state.persons[1].age}
         change = {this.nameChangedHandler}
          click={this.switchNameHandler.bind(this,"Max!")}> 
          My Hobbies: Lel
        </Person>
        <Person 
         name={this.state.persons[2].name} 
         age={this.state.persons[2].age}/>
      </div>
      );
    }
    
    return (
      <div className="App">
        <h1>Wassup</h1>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>

        {persons}
      </div>
    );
  }
}

export default App;
