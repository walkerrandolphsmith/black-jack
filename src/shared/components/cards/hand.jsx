import React from 'react';
import Card from './card-front';
import CardBack from './card-back';

export default class Hand extends React.Component {
  render() {
    const { hand, isOpponent, dispatch } = this.props;

    let cards = hand.map((card, key) => {
      return (isOpponent && key === 0)
        ? (<CardBack key={key} />)
        : (<Card key={key} id={key} suit={card.suit} rank={card.rank} />);
    });

    return (
      <div id="my-hand">
        {cards}
      </div>
    )
  }
}
