import React from 'react';

class DateOption extends React.Component {

  render() {
    let day = this.props.dateValue;

    return (
      <div>
        <span className="date-text">
          {day.substr(0, 3)}<br/>
        </span>
        <span className="lg-date-text">
          {day.substr(4,2)}<br/>
        </span>
        <span className="date-text">
          {day.substr(7, 3)}
        </span>
      </div>
    );
  }
}

export default DateOption;
