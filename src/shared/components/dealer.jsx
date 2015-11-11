import React from 'react';
import Score from './score';
import Hand from './cards/hand';
import MovesView from './moves';

export default class Dealer extends React.Component {
  render() {
    const { player, dispatch } = this.props;

    return (
      <div id="dealer">
        <Score score={player.total} />
        <Hand hand={player.hand} isOpponent={false} />
      </div>
    )
  }
}
