import React from 'react';

export default class FaceCard extends React.Component {
  render() {
    const {suit, rank} = this.props;

    const src = `assets/img/faces/face-${rank.name}-${suit.name}.png`;

    return (
      <span className="face middle_center">
        <img src={src} />
      </span>
    )
  }
}
