import React from 'react';
import Card from './card-front';
import CardBack from './card-back';

export default class Hand extends React.Component {
  render() {
    const { hand, isOpponent, dispatch } = this.props;

    let cards = hand.map((card, j) => {
      return (isOpponent && j === 0) ? (<CardBack />) : (<Card key={j} id={j} suit={card.suit} rank={card.rank} />);
    });

    return (
      <div id="my-hand">
        {cards}
      </div>
    )
  }
}
