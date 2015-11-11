import React from 'react';

export default class Card extends React.Component {
  render() {
    const {suit} = this.props;

    return (
      <div>
        <span className="suit top_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
        <span className="suit middle_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
        <span className="suit bottom_center" dangerouslySetInnerHTML={{__html: suit.symbol}}></span>
      </div>
    )
  }
}
