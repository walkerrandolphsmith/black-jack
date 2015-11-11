import React from 'react';
import Card from './card-front';

export default class Player extends React.Component {
  render() {
    const { hand, isOpponent, dispatch } = this.props;

    let cards = hand.map((card, j) => {
      return (
        <Card key={j} id={j} suit={card.suit} rank={card.rank} />
      );
    });

    return (
      <div id="my-hand">
        {cards}
      </div>
    )
  }
}
