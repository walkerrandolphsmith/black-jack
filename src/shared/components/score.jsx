import React from 'react';

export default class Score extends React.Component {
  render() {
    const { score, dispatch } = this.props;

    let scoreStyle = {
      lineHeight: '.8em',
      textTransform: 'uppercase',
      fontSize: '3.5em',
      letterSpacing: '-.03em',
      fontWeight: '800'
    }

    return (
      <div id="score" style={scoreStyle}>
        {score}
      </div>
    )
  }
}
