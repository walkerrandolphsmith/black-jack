import React from 'react';
import Hand from './cards/hand';

export default class Dealer extends React.Component {
  render() {
    const { player } = this.props;

    return (
      <div id="dealer">
        <Hand hand={player.hand} isOpponent={true} />
      </div>
    )
  }
}
