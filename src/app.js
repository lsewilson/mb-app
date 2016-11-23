import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Calendar from './calendar';
import Button from './button';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      calendarShown: false
    }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.setState({ calendarShown: !this.state.calendarShown })
  }

  render() {
    let btnText = this.state.calendarShown ? 'SELECT MULTIPLE TIMESLOTS' : 'SCHEDULE A VIEWING!';
    let component = this.state.calendarShown ? <Calendar  /> : '';

    return (
      <div>
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
