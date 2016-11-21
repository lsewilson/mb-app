import React, { PropTypes } from 'react';
import MinimizeBox from './minimize-box'


class Calendar extends React.Component {
  render() {
    return (
      <div className="calendar">
        <MinimizeBox />
      </div>
    );
  }
}

export default Calendar;
