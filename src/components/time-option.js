import React from 'react';

class TimeOption extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    console.log("time option was clicked!")
  }

  render() {
    return (
      <div className="time" onClick={this.handleClick}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default TimeOption;
