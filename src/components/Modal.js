import React, { Component } from 'react';


export class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggle(e) {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const display = {
      display: 'block'
    };

    const hide = {
      display: 'none'
    };
    
    return (
      <div>
        <button className="btn btn-submit" onClick={(e) => this.toggle(e)}>{this.props.buttonText}</button>
        <div className="modal">
          <div className="modal-content" style={this.state.open ? display : hide}>
            {...children}
          </div>
        </div>
      </div>
    )
  }
}