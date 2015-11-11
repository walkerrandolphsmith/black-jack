import React from 'react';
import Card from './card';

export default class Deck extends React.Component {
  render() {
    let cards = this.props.cards.map((card, index) => {
      return (
        <Card key={index} id={index} suit={card.suit} rank={card.rank} />
      )
    });

    return (
      <div id="deck">{cards}</div>
    )
  }
}
