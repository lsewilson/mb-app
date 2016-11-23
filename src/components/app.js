import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Calendar from './calendar';
import Button from './button';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      calendarShown: false,
      bookings: [],
      btnText: "SCHEDULE A VIEWING!"
    }
    this.handleClick = this.handleClick.bind(this);
    this.updateButton = this.updateButton.bind(this);

  };

  handleClick() {
    if (this.state.bookings.length > 0 ) {
      this.postData();
      this.setState({ bookings: [] , btnText: "SCHEDULE A VIEWING!" }, function(){
        this.updateButton();
      });
    }
    this.setState({ calendarShown: !this.state.calendarShown }, function(){
      this.updateButton();
    })
  }

  updateButton() {
    let numSlots = this.state.bookings.length
    let timeslots = numSlots > 0 ? 'SEND ' + numSlots +' TIMESLOTS' : 'SELECT MULTIPLE TIMESLOTS'
    let btnText = this.state.calendarShown ? timeslots : 'SCHEDULE A VIEWING!';
    this.setState({ btnText: btnText })
  }

  postData() {
    let data = {
      property: "White House",
      dates: this.state.bookings
    }
    console.log("Posted following data via ajax request!")
    console.log(data)
    // Send data in a post request, e.g. via ajax
  }

  render() {
    let component = this.state.calendarShown ? <Calendar calendarShown={this.handleClick} bookings={this.state.bookings} updateButton={this.updateButton} /> : '';

    return (
      <div className="app">
        <Button text={this.state.btnText} onClick={this.handleClick}/>
        <ReactCSSTransitionGroup
          transitionName={"slide"}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {component}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
};


export default App;
