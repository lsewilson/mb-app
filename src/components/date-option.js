import React from 'react';
import Time from 'react-time'

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

class DateOption extends React.Component {

  render() {
    let day = this.props.dateValue;

    return (
      <div>
        <span className="date-text">
          {weekdays[day.getDay()]}<br/>
        </span>
        <span className="lg-date-text">
          {<Time value={day} format="DD"/>}<br/>
        </span>
        <span className="date-text">
          {<Time value={day} format="MMM"/>}
        </span>
      </div>
    );
  }
}

export default DateOption;
