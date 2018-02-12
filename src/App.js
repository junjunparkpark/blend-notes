import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NoteListItem, Modal, NoteForm } from './components';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };

    this.addNote.bind(this);
  }

  addNote() {

  }

  render() {
    return (
      <div className="app" >
        <nav className="todo-navigation">
          <ul className="page-wrapper action-buttons">
            <li>
              <Modal buttonText="+ Add Note">
                <NoteForm addNote={this.addNote} />
              </Modal>
            </li>
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
