import React from 'react';

export default class Moves extends React.Component {
  stay = () => {
      this.props.stay();
  }
  hit = () => {
      this.props.hit();
  }
  render() {
    let {canHit} = this.props;
    return (
      <div id="moves">
        <button disabled={!canHit} onClick={this.props.stay}>Stay!</button>
        <button disabled={!canHit} onClick={this.props.hit}>HIT!</button>
      </div>
    )
  }
}
