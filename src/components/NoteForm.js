import React, { Component } from 'react';

export class NoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Date.now(),
      category: 'red',
      title: null,
      body: null,

    }
  }

  componentDidMount() {

  }

  handleCategoryClick(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, console.log(this.state))
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.category && this.state.title && this.state.body) {
      this.props.addNote(this.state);
      this.props.toggle();
    } else {
      alert('All fields must be completed');
    }
  }

  render() {
    const { id, category, title, body } = this.state;
    return (
      <div className="card">
        <div className={`card-category ${category}`}>
          <ul className="action-buttons" id="category-buttons">
            <li>
              <button className="category-button btn-red" name="red" onClick={(e) => this.handleCategoryClick(e)}></button>
            </li>

            <li>
              <button className="category-button btn-green" name="green" onClick={(e) => this.handleCategoryClick(e)}></button>
            </li>

            <li>
              <button className="category-button btn-yellow" name="yellow" onClick={(e) => this.handleCategoryClick(e)}></button>
            </li>

            <li>
              <button className="category-button btn-blue" name="blue" onClick={(e) => this.handleCategoryClick(e)}></button>
            </li>
          </ul>
        </div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="note-title">
            <input className="note-input h1" name="title" onChange={(e) => this.handleChange(e)} type="text" placeholder="Untitled" autoFocus/> 
          </div>
          <div className="note-body">
            <textarea onChange={(e) => this.handleChange(e)} className="note-input paragraph" name="body" placeholder="Just start typing here" rows="30"></textarea>
          </div>
          <div className="modal-footer">
            <div className="left">
              <button className="cancel">Cancel</button>
            </div>

            <div className="right">
              <button className={(category && title && body ? 'submit' : 'inactive-submit')} type="submit">Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}