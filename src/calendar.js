import React from 'react';
import MinimizeBox from './minimize-box'
import DatesBox from './dates-box'


class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
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
        <DatesBox />

      </div>
    );
  }
}

export default Calendar;
