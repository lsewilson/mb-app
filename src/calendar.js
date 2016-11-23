import React from 'react';
import MinimizeBox from './minimize-box'


class Calendar extends React.Component {
  render() {
    return (
      <div className="calendar">
        <MinimizeBox />
        <div className="instruction-box">
          <p>Pick times that suit you.</p>
          <p>Well talk to the agent and book it in.</p>
        </div>
      </div>
    );
  }
}

export default Calendar;
