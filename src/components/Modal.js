import React, { Component } from 'react';


export class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Date.now(),
      open: false
    }

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    // If there is a click outside of .modal-content when modal popup is rendered, it will hide the popup
    window.onclick = (event) => {
      if (event.target.id == this.state.id) {     
        this.setState({
          open: !this.state.open
        });
      }
    }
  }

  toggle(e) {
    console.log('TOGGLING! ', this.state)
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { children } = this.props;
    const display = { display: 'block' };
    const hide = { display: 'none' };
    const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { toggle: this.toggle }));

    return (
      <div>
        <button className="btn btn-submit" onClick={(e) => this.toggle(e)}>{this.props.buttonText}</button>
        <div className="modal" id={this.state.id} style={this.state.open ? display : hide}>
          <div className="modal-content modal-sm">
            {childrenWithProps}
          </div>
        </div>
      </div>
    )
  }
}