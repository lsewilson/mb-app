import React from 'react';

class MinimizeBox extends React.Component {
  render() {
    return (
      <div className="minimize-box" onClick={this.props.onClick}>
        <img src={require('./img/arrow.png')}/>
      </div>
    );
  }
}

export default MinimizeBox;
