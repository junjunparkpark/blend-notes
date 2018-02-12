import React, { Component } from 'react';

export class NoteListItem extends Component {
 render() {
   const { note } = this.props
   return (
      <div className="card">
        <div className={`card-category-${note.category}`}>
        </div>
        <div className="note-title">
          <h1>{note.title}</h1>
          <ul className="action-buttons">
            <li>
              <a href="#">
                <i className="fa fa-pencil-alt"></i>
              </a>
            </li>

           <li>
             <a href="#">
               <i className="fa fa-trash"></i>
             </a>
           </li>
          </ul>
        </div>
        <div className="note-body">
          <p>
            {note.body}
          </p>
        </div>
          
      </div>
   );
 }
}