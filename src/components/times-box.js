import React from 'react';
import TimeOption from './time-option';

class TimesBox extends React.Component {

  render() {
    return (
      <div className="times-box">
        <TimeOption currentDay={this.props.currentDay} text={"Morning (8:00 - 12:00)"} bookings={this.props.bookings} />
        <TimeOption currentDay={this.props.currentDay} text={"Afternoon (12:00 - 18:00)"} bookings={this.props.bookings} />
        <TimeOption currentDay={this.props.currentDay} text={"Evening (18:00 - 22:00)"} bookings={this.props.bookings} />
      </div>
    );
  }
}

export default TimesBox;
