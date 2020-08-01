import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';




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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{ backgroundColor: 'lightgreen',
                 color: 'black'},
    };

    let persons = null;

    if(this.state.showPersons)
    {
      persons = (
        <div>
          {
            this.state.persons.map(
              (person,index) => {
                return <Person 
                          click = {()=>this.deletePersonHandler(index)} 
                          name = {person.name}
                          age = {person.age}
                          key = {person.id}
                          changed = {(event) => this.nameChangedHandler(event,person.id)}/>
              }
            )
          }
      </div>
      );
      style.backgroundColor = 'red';
      style[':hover']={ backgroundColor: 'salmon',
      color: 'black'}
    }
    
    const classes = [];
    
    if( this.state.persons.length <= 2){
      classes.push('red');
    }

    if( this.state.persons.length <= 1){
      classes.push('bold');
    }
    
    return (
        <div className="App">
        <h1>Wassup</h1>
        <p className= {classes.join(' ')}>Hii</p>
        <button className='button' onClick={this.togglePersonHandler}>Toggle Persons</button>

        {persons} 
      </div>

    );
  }
}

export default App;
