import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Calendar from './calendar';
import Button from './button';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      calendarShown: false,
      bookings: []
    }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    if (this.state.bookings.length > 0 ) {
      this.postData();
      this.setState({ bookings: [] });
    }
    this.setState({ calendarShown: !this.state.calendarShown })
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
    let btnText = this.state.calendarShown ? 'SELECT MULTIPLE TIMESLOTS' : 'SCHEDULE A VIEWING!';
    let component = this.state.calendarShown ? <Calendar calendarShown={this.handleClick} bookings={this.state.bookings} /> : '';

    return (
      <div className="app">
        <Button text={btnText} onClick={this.handleClick}/>
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
