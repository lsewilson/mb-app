import React, { PropTypes } from 'react';

class MinimizeBox extends React.Component {
  render() {
    return (
      <div className="minimize-box">
        <img src={require("./img/arrow.png")}/>
      </div>
    );
  }
}

export default MinimizeBox;
