import React from 'react';

export default class Moves extends React.Component {
  hit = () => {
      console.log("I HIT THE THING");
  }
  render() {
    return (
      <div id="moves">
        <button onClick={this.hit}>HIT!</button>
      </div>
    )
  }
}
