import React from 'react';
import Card from './card';
import MovesView from './moves';

export default class Player extends React.Component {
  render() {
    const { game, dispatch } = this.props;

    let player = game.players[0];

    let cards = player.hand.map((card, j) => {
      return (
        <Card key={j} id={j} suit={card.suit} rank={card.rank} />
      );
    });
    let playerId = `player-${player.pid}`;

    return (
      <div id="player">
        <div id={playerId}>
          <div>Total: {player.total}</div>
          <div>Hand: {cards} </div>
        </div>
        <MovesView canHit={player.canHit} hit={this.props.hit} stay={this.props.stay} />
      </div>
    )
  }
}
