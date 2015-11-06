import React from 'react';

export default class Deck extends React.Component {
  render() {
    const { cards } = this.props;

    let deckStyle = {
      display: 'inline-block'
    };

    const deckMarkup = cards.map(function(card, i){
      return (
        <div key={i} className="card" style={deckStyle}> {card.value} : {card.suite}</div>
      );
    });

    return (
      <div id="deck" style={deckStyle}>{deckMarkup}</div>
    )
  }
}
