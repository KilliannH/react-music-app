import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons:
            [
                {name: 'Max', age: 28},
                {name: 'Manu', age: 32},
                {name: 'Stephany', age: 30}
            ]
    };

    switchStateHandler = () => {
        // console.log('Was clicked');
        // DONT DO THIS : this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons:
                [
                    {name: 'Maximilian', age: 28},
                    {name: 'Manu', age: 32},
                    {name: 'Stephany', age: 27}
                ]
        })
    };

  render() {
      return (
          <div className="App">
              <h1>Hi, I'm a react app!</h1>
              <p>This is really working !</p>
              <button onClick={this.switchStateHandler}>Switch Name</button>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Coucou</Person>
              <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Salut</Person>
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Bonjour</Person>
          </div>
      );
  }
}

export default App;
