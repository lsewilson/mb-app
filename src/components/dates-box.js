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

  createDateList() {
    let date1 = new Moment().format("ddd,D,MMM");
    let date2 = new Moment().add(1, 'day').format("ddd,D,MMM");
    let date3 = new Moment().add(2, 'day').format("ddd,D,MMM");
    let date4 = new Moment().add(3, 'day').format("ddd,D,MMM");
    let date5 = new Moment().add(4, 'day').format("ddd,D,MMM");
    let list = [date1, date2, date3, date4, date5];

    list.forEach(function(date,i) {
      if (date.substr(0, 3) === "Sun" ) {
        list.splice(i,1);
        list.push(new Moment().add(5,'day').format("ddd,D,MMM"));
      }
    });
    return list;
  }

  render() {

    let dateList = this.createDateList();

    return (
      <div className="dates-box">
        <div className="date" onClick={() => this.handleChange(dateList[0])}><DateOption dateValue={dateList[0]} /> </div>
        <div className="date" onClick={() => this.handleChange(dateList[1])} ><DateOption dateValue={dateList[1]} /> </div>
        <div className="date" onClick={() => this.handleChange(dateList[2])}><DateOption dateValue={dateList[2]} /> </div>
        <div className="date" onClick={() => this.handleChange(dateList[3])}><DateOption dateValue={dateList[3]} /> </div>
        <div className="date" onClick={() => this.handleChange(dateList[4])} ><DateOption dateValue={dateList[4]} /> </div>
      </div>
    );
  }
}


export default DatesBox;
