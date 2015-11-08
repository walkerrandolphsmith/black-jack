import Immutable from 'immutable';
import _ from 'lodash';
import cards from './../constants/deck';
//const INITIAL_STATE = new Immutable.List();

const deck = ['s', 'h', 'd', 'c'].reduce((d, suite) => {
  return d.concat(_.times(13, i => { return {suite: suite, value: i}; }));
}, []);

const playerOne = createPlayer(0);
const playerTwo = createPlayer(1);

const INITIAL_STATE = {
  players: [playerOne, playerTwo],
  deck: deck,
  activeGame: true,
  winner: false,
  cards: cards
};

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case 'HIT': return hit(0, state);
    case 'STAY': return stay(0, state);
  }
  return state;
}

function hit(playerId, state){

  state.players.forEach(player => { state.deck = _.difference(state.deck, player.hand); });
  let randomCard = _.sample(state.deck);

  state.players[playerId].hand.push(randomCard);

  let score = _.sum(state.players[playerId].hand, card => { return card.value; });

  let playerOne = {
    pid : playerId,
    hand : state.players[playerId].hand,
    canHit : score < 21,
    total : (playerId === 0) ? score : state.players[0].total
  }
  let players = [playerOne, state.players[1]];
  let activeGame = isGameActive(players);

  let winner = state.players.sort((x,y) => { return x.total < y.total; })[0];

  return {
    players: players,
    deck: state.deck,
    activeGame: activeGame,
    winner: winner,
    cards: cards
  }
}

function stay(playerId, state){
  let playerOne = {
    pid : 0,
    hand : state.players[0].hand,
    canHit : (playerId === 0) ? false : state.players[0].canHit,
    total : state.players[0].total
  }
  let players = [playerOne, state.players[1]];
  let activeGame = isGameActive(players);

  return {
    players: players,
    deck: state.deck,
    activeGame: activeGame,
    winner: state.winner,
    cards: cards
  };
}

function createPlayer(pid){
  return {
    pid: pid,
    hand: [],
    canHit: true,
    total: 0
  };
}

function isGameActive(players){
  return !players.every(player => { return !player.canHit; });
}
