import Immutable from 'immutable';
import _ from 'lodash';
import cards from './../constants/deck';
//const INITIAL_STATE = new Immutable.List();

const deck = cartesianProduct(cards.SUITS, cards.RANKS);
const playerOne = createPlayer(0);
const playerTwo = createPlayer(1);

const INITIAL_STATE = {
  players: [playerOne, playerTwo],
  deck: deck,
  activeGame: true,
  winner: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case 'HIT': return dealer(1, hit(0, state));
    case 'STAY': return dealer(1, stay(0, state));
  }
  return state;
}

function dealer(dealerId, state) {
  console.log("DEALER", dealerId, state);

  //Determine to hit or stay
  const score = state.players[dealerId].total;
  const opponentScore = state.players[0].total;
  const opponentCanHit = state.players[0].canHit;

  const numberOfCardsThatBust = state.deck.reduce((x, y) => {
    return (score + y > 21) ? x + 1 : x;
  }, 0);

  const numberOfCardsThatDontBust = state.deck.reduce((x, y) => {
    return (score + y <= 21) ? x + 1 : x;
  }, 0);

  if(score === 21) return stay(dealerId, state);
  else if(!opponentCanHit && score > opponentScore) return stay(dealerId, state);
  else if(numberOfCardsThatBust > numberOfCardsThatDontBust) return stay(dealerId, state);
  else return hit(dealerId, state);
}

function hit(playerId, state){

  state.players.forEach(player => { state.deck = _.difference(state.deck, player.hand); });
  let randomCard = _.sample(state.deck);

  state.players[playerId].hand.push(randomCard);

  let score = _.sum(state.players[playerId].hand, card => { return card.rank.value; });

  let player = {
    pid : playerId,
    hand : state.players[playerId].hand,
    canHit : score < 21,
    total : score
  }

  let players = [];
  if(playerId === 0){
    players.push(player);
    players.push(state.players[1]);
  }else{
    players.push(state.players[0]);
    players.push(player);
  }

  let activeGame = isGameActive(players);

  let winner = state.players.sort((x,y) => { return x.total < y.total; })[0];

  return {
    players: players,
    deck: state.deck,
    activeGame: activeGame,
    winner: winner
  }
}

function stay(playerId, state){
  let player = {
    pid : 0,
    hand : state.players[0].hand,
    canHit : (playerId === 0) ? false : state.players[0].canHit,
    total : state.players[0].total
  }

  let players = [];
  if(playerId === 0){
    players.push(player);
    players.push(state.players[1]);
  }else{
    players.push(state.players[0]);
    players.push(player);
  }

  let activeGame = isGameActive(players);

  return {
    players: players,
    deck: state.deck,
    activeGame: activeGame,
    winner: state.winner
  };
}

function cartesianProduct(){
  return _.reduce(arguments, (a, b) => {
      return _.flatten(_.map(a, x => {
          return _.map(b, (y, i) => {
            //??
            return {suit: x['rank'], rank: y};
          });
      }), false);
  }, [[]]);
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
