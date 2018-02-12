import React, { Component } from 'react';

export class NoteListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Date.now(),
      category: 'red',
      title: null,
      body: null,

    }
  }

  handleCategoryClick(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleChange(e) {
    console.log('MULTI LINE ', e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { id, category, title, body } = this.state;
    return (
      <div className="card">
        <div className={`card-category ${category}`}>
          <ul className="action-buttons" id="category-buttons">
            <li>
              <button className="category-button" name="red" onClick={(e) => this.handleCategoryClick(e)}></button>
            </li>

            <li>
              <button className="category-button" name="green" onClick={(e) => this.handleCategoryClick(e)}></button>
            </li>

            <li>
              <button className="category-button" name="yellow" onClick={(e) => this.handleCategoryClick(e)}></button>
            </li>

            <li>
              <button className="category-button" name="red" onClick={(e) => this.handleCategoryClick(e)}></button>
            </li>
          </ul>
        </div>
        <div className="note-title">
          <input className="note-input h1" type="text" placeholder="Untitled" autoFocus/> 
        </div>
        <div className="note-body">
          <textarea className="note-input paragraph" name="body" placeholder="Just start typing here" ows="30"></textarea>
        </div>
        <div className="modal-footer">
          <div className="left">
            <button className="cancel">Cancel</button>
          </div>

          <div className="right">
            <button className="submit" id={(category && title && body ? 'active-submit' : '')}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}