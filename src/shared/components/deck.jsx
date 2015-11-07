import React from 'react';

export default class Deck extends React.Component {
  render() {
    const { cards } = this.props;

    let suits = [{symbol}];

    let card = suits.map((suit, index) => {
      return (
        <div key={index} class="card-three">
          <div class="corner top">
            <span class="number">3</span>
            <span>{suit.symbol}</span>
          </div>
          <span class="suit top_center">{suit.symbol}</span>
          <span class="suit middle_center">{suit.symbol}</span>
          <span class="suit bottom_center">{suit.symbol}</span>
          <div class="corner bottom">
            <span class="number">3</span>
            <span>{suit.symbol}</span>
          </div>
        </div>
      )
    });

    return (
      <div id="deck" style={deckStyle}>{deckMarkup}</div>
    )
  }
}
