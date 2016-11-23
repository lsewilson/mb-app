import React from 'react';
import TimeOption from './time-option';

class TimesBox extends React.Component {

  render() {
    return (
      <div className="times-box">
        <TimeOption text={"Morning (8:00 - 12:00)"} />
        <TimeOption text={"Afternoon (12:00 - 18:00)"}  />
        <TimeOption text={"Evening (18:00 - 22:00)"}  />
      </div>
    );
  }
}

export default TimesBox;
