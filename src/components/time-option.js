import React from 'react';

class TimeOption extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    let option = {date: this.props.currentDay, time: this.props.text};
    if (this.props.bookings.length === 0 ) {
      this.props.bookings.push(option);
    } else {
      this.props.bookings.forEach(function(booking, i, arr) {
        if (option.date === booking.date && option.time === booking.time) {
          arr.splice(i, 1);
        } else {
          arr.push(option);
        }
      });
    }
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
