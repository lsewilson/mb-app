import React from 'react';

class TimeOption extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    let option = {date: this.props.currentDay, time: this.props.text};
    if (this.props.bookings.length === 0 ) {
      this.props.bookings.push(option);
    } else {
      this.checkExisting(0,this.props.bookings,option)
    }
  }

  checkExisting(i, array, option) {
    if (array[i].date === option.date && array[i].time === option.time) {
      array.splice(i,1);
    } else if (i < array.length - 1) {
        this.checkExisting(i+1, array, option);
    } else {
      array.push(option)
    }
  }

  render() {
    return (
      <div className="time" onClick={this.handleClick}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default TimeOption;
