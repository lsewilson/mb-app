import React from 'react';
import DateOption from './date-option'
import Moment from 'moment'

class DatesBox extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(day) {
    this.props.onSelectDay(day);
  }

  render() {

    let date1 =  new Moment()._d
    let date2 = new Moment().add(1, 'day')._d
    let date3 = new Moment().add(2, 'day')._d
    let date4 = new Moment().add(3, 'day')._d
    let date5 = new Moment().add(4, 'day')._d

    let dateList = [date1, date2, date3, date4, date5]

    return (
      <div className="dates-box">
        <button className="date" onClick={() => this.handleChange(dateList[0])}><DateOption dateValue={dateList[0]} /> </button>
        <button className="date" onClick={() => this.handleChange(dateList[1])} ><DateOption dateValue={dateList[1]} /> </button>
        <button className="date" onClick={() => this.handleChange(dateList[2])}><DateOption dateValue={dateList[2]} /> </button>
        <button className="date" onClick={() => this.handleChange(dateList[3])}><DateOption dateValue={dateList[3]} /> </button>
        <button className="date" onClick={() => this.handleChange(dateList[4])} ><DateOption dateValue={dateList[4]} /> </button>
      </div>
    );
  }
}


export default DatesBox;
