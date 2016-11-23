import React from 'react';

class Button extends React.Component {

  render() {
    return (
      <div className="button" onClick={this.props.onClick}>
      <p className="btn-text">{this.props.text}</p>
      </div>
    );
  }
}

export default Button;
