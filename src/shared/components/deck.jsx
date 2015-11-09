import React from 'react';
import Card from './card';

export default class Deck extends React.Component {
  render() {
    const {SUITS, RANKS} = this.props.cards;

    let cards = SUITS.map((suit, index) => {
      let rank = RANKS[(RANKS.length -1) - index];
      return (
        <Card key={index} suit={suit} rank={rank} id={index} />
      )
    });

    return (
      <div id="deck">{cards}</div>
    )
  }
}
