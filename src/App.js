import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  render() {
    return (
      <div className="app" >
        <nav className="todo-navigation">
          <ul className="page-wrapper action-buttons">
            <li><button>+ Add Note</button></li>
          </ul>
        </nav>
        <section className="todo-list page-wrapper">
          
        </section>
        
      </div>
    );
  }
}

export default App;
