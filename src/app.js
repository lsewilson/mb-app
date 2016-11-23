import React from 'react';
import Calendar from './calendar';
import Button from './button';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    console.log("The big button was clicked!")
  }

  render() {

    return (
      <div>
        <Button text="SCHEDULE A VIEWING!" onClick={this.handleClick}/>
      </div>
    );
  }
};


export default App;
