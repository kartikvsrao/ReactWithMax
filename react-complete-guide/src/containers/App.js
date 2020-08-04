import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'





class App extends Component {

  state = {
    persons: [
      {id:'12', name:'Kartik', age:22},
      {id:'13', name:'Parth', age:2},
      {id:'14', name:'Steve', age:222},
    ] ,
    showPersons : false,
  }


  nameChangedHandler = (event,id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex]=person;

    this.setState(
      {
        persons: persons
      }
    );
  }

  togglePersonHandler = () => {
      this.setState({
        showPersons: !this.state.showPersons
      });
  } 

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  render() {


    let persons = null;


    if(this.state.showPersons)
    {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>;

      

    }
    
    return (
        <div className={classes.App}>
        <Cockpit
           showPersons={this.state.showPersons}
           persons={this.state.persons}
           clicked={this.togglePersonHandler}/>
        {persons} 
      </div>

    );
  }
}

export default App;
