import React from 'react';
import MovesView from './moves';

export default class Player extends React.Component {
  render() {
    const { game, dispatch } = this.props;

    const players = game.players.map((e, i) => {
      let cards = e.hand.map((card, j) => {
        return (
          <div key={j}>{card.suite} : {card.value}</div>
        );
      });

      return (
        <div key={i}>
          <div>Pid: {e.pid}</div>
          <div>Total: {e.total}</div>
          <div>CanHit: {e.canHit ? 'true': 'false'}</div>
          <div>Hand: {cards} </div>
        </div>
      );
    });

    return (
      <div id="player">
        <div id="players">{players}</div>
        <MovesView hit={this.props.hit} stay={this.props.stay} />
      </div>
    )
  }
}
