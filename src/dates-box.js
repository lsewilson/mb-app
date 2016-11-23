import React from 'react';

class DatesBox extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(day) {
    this.props.onSelectDay(day);
  }

  render() {
    let date1 = new Date(2016, 10, 23);
    let date2 = new Date(2016, 10, 24);
    let date3 = new Date(2016, 10, 25);
    let date4 = new Date(2016, 10, 26);
    let date5 = new Date(2016, 10, 27);
    let dateList = [date1, date2, date3, date4, date5]

    return (
      <div className="dates-box">
        <button className="date" onClick={() => this.handleChange(dateList[0])}>day1</button>
        <button className="date" onClick={() => this.handleChange(dateList[1])}>day2</button>
        <button className="date" onClick={() => this.handleChange(dateList[2])}>day3</button>
        <button className="date" onClick={() => this.handleChange(dateList[3])}>day4</button>
        <button className="date" onClick={() => this.handleChange(dateList[4])}>day5</button>
      </div>
    );
  }
}


export default DatesBox;
