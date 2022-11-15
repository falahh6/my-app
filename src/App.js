import './App.css';
import React, { createElement } from 'react';
import Person from './Person/Person';
import { Component } from 'react';

class App extends Component{
  state = {
    Persons:[
      {name:"falah", age:20},
      {name:"Ashaar", age:21},
      {name:"Kaif", age:22},
      {name:"Nijn", age:19}
    ],
    otherNmae: "okay"
  }
  switchNameHandler = (newName) => {
    this.setState({
      Persons:[
        {name: newName ,age:20},
        {name:"Ashaar A", age:21},
        {name:"Kaif K", age:22},
        {name:"Nijn N", age:19}
      ],
      otherNmae: "okkkay"
    })
  }
  nameChangeHandler = (event) =>{
    this.setState({
      Persons:[
        {name: "falah", age:20},
        {name:"Ashaar A", age:21},
        {name: event.target.value , age:22},
        {name:"Nijn N", age:19}
      ],
      otherNmae: "okkkay"
    })
  }
  render(){
    const style = {
      padding: '10px',
      marginTop: '20px',
      border: '1px solid Blue',
      cursor: 'pointer'
    }
    return (
      
      <div className="App">
        <h1>This is falah and a first react app</h1>
        <p>This is Paragraph</p>
        <Person  click={this.switchNameHandler.bind(this, "Falahhh")} name={this.state.Persons[0].name} age={this.state.Persons[0].age}> and Senior DA</Person>
        <Person  name={this.state.Persons[1].name} age={this.state.Persons[1].age}/>
        <Person name={this.state.Persons[2].name} age={this.state.Persons[2].age} change={this.nameChangeHandler}/>
        <Person  name={this.state.Persons[3].name} age={this.state.Persons[3].age}/>
        <button style={style} onClick={this.switchNameHandler.bind(this, "Fal")}>Its okay</button>
        <p>{this.state.otherNmae}</p>
      </div>

  )}
}


export default App;
