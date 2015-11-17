import React from 'react';
import Score from './score';
import Hand from './cards/hand';

export default class Player extends React.Component {
  render() {
    const { player } = this.props;

    let playerId = `player-${player.pid}`;

    return (
      <div id="player">
        <Score score={player.total} />
        <Hand hand={player.hand} isOpponent={false} />
      </div>
    )
  }
}
