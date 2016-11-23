import React from 'react';

class TimeOption extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.props.bookings.push({date: this.props.currentDay, time: this.props.text})
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
