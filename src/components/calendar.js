import React from 'react';
import MinimizeBox from './minimize-box'
import DatesBox from './dates-box'
import TimesBox from './times-box'

class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentDay: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDaySelection = this.handleDaySelection.bind(this);
  }

  handleDaySelection(day) {
    this.setState({
      currentDay: day
    });
  }

  handleClick() {
    this.props.calendarShown()
  }

  render() {
    return (
      <div className="calendar">
        <MinimizeBox onClick={this.handleClick}/>
        <div className="instruction-box">
          <p>Pick times that suit you.</p>
          <p>Well talk to the agent and book it in.</p>
        </div>
        <DatesBox onSelectDay={this.handleDaySelection}/>
        <TimesBox bookings={this.props.bookings} currentDay={this.state.currentDay} />
      </div>
    );
  }
}

export default Calendar;
