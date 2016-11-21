import React, { PropTypes } from 'react';

class ScheduleButton extends React.Component {
  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  render() {
    return (
      <div className="schedule-button" onClick={this.handleClick.bind(this)}>
      <p id="text">SCHEDULE A VIEWING!</p>
      </div>
    );
  }
}

export default ScheduleButton;
