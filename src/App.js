import React, { Component } from 'react';
import './App.css';
import AutoCompleteText from './AutoCompleteText';
import countries from './countries';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-Component">
      <AutoCompleteText items={countries}/>
      <br />
      <AutoCompleteText items={['Adam', 'Alana', 'Jack', 'John']}/>
      </div>
      </div>
    );
  }
}

export default App;
