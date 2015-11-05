import React from 'react';

export default class Moves extends React.Component {
  stay = () => {
      this.props.stay();
  }
  hit = () => {
      this.props.hit();
  }
  render() {
    return (
      <div id="moves">
        <button onClick={this.stay}>Stay!</button>
        <button onClick={this.hit}>HIT!</button>
      </div>
    )
  }
}
