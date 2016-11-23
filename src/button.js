import React, { PropTypes } from 'react';

class Button extends React.Component {

  render() {
    return (
      <div className="schedule-button" onClick={this.props.onClick}>
      <p id="text">{this.props.text}</p>
      </div>
    );
  }
}

export default Button;
