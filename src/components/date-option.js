import React from 'react';

class DateOption extends React.Component {

  render() {
    let day = this.props.dateValue.split(",");

    return (
      <div>
        <span className="date-text">
          {day[0]}<br/>
        </span>
        <span className="lg-date-text">
          {day[1]}<br/>
        </span>
        <span className="date-text">
          {day[2]}
        </span>
      </div>
    );
  }
}

export default DateOption;
