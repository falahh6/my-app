import './App.css';
import React, { createElement } from 'react';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>This is falah and a first react app</h1>
      <p>This is Paragraph</p>
      <Person  name="falah" age="20"> and Senior DA</Person>
      <Person  name="Ashaar" age="21"/>
      <Person  name="Kaif" age="19"/>
      <Person  name="Nijn" age="20"/>
    </div>
  );
  // return React.createElement('div',{className:'App'},createElement('h1',null,'this is JSX'));
}

export default App;
