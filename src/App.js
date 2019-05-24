import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a react app!</h1>
      <p>This is really working !</p>
      <Person name="Max" age="28"/>
        <Person name="Manu" age="32"/>
        <Person name="Stefany" age="30"/>
    </div>
  );
}

export default App;
