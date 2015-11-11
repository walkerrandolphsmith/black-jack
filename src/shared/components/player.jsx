import React from 'react';
import Score from './score';
import Hand from './cards/hand';
import MovesView from './moves';

export default class Player extends React.Component {
  render() {
    const { player, dispatch } = this.props;

    let playerId = `player-${player.pid}`;

    return (
      <div id="player">
        <Score score={player.total} />
        <MovesView canHit={player.canHit} hit={this.props.hit} stay={this.props.stay} />
        <Hand hand={player.hand} isOpponent={false} />
      </div>
    )
  }
}
