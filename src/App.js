import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NoteListItem } from './components';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  addNote() {
    
  }

  render() {
    return (
      <div className="app" >
        <nav className="todo-navigation">
          <ul className="page-wrapper action-buttons">
            <li><button>+ Add Note</button></li>
          </ul>
        </nav>
        <section className="page-wrapper">
          <div className="todo-list">
            {this.state.notes.map(note => <NoteListItem key={note.id} note={note} />)}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
