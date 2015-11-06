import Immutable from 'immutable';

//const INITIAL_STATE = new Immutable.List();

let deck = [];
['s', 'h', 'd', 'c'].forEach((suite, i) => {
  for(var j = 0; j < 13; j++){
    deck.push({suite: suite, value: j});
  };
});

let playerOne = {
  pid: 0,
  hand: [],
  canHit: true,
  total: 0
};
let playerTwo = {
  pid: 1,
  hand: [],
  canHit: true,
  total: 0
};

let players = [playerOne, playerTwo];

const INITIAL_STATE = {
  players: players,
  deck: deck,
  activeGame: true
};

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case 'HIT':
      console.log("REDUCER", "HIT", state);
      state = hit(0, state);
      state = hit(1, state);
      console.log("AFTER", state);
      return state;
    case 'STAY':
      console.log("REDUCER", "STAY", state);
      state = stay(0, state);
      state = stay(1, state);
      console.log("AFTER", state);
      return state;
  }
  return state;
}

function hit(playerId, state){
  state.players[playerId].hand.push(state.deck[3]);
  state = calculateScore(playerId, state);
  if(state.players[playerId].total > 21)
    state = hold(playerId, state);
  state = endGame(state);
  return state;
}

function stay(playerId, state){
  state = hold(playerId, state);
  state = endGame(state);
  return state;
}

function hold(playerId, state){
  state.players[playerId].canHit = false;
  return state;
}

function endGame(state){
  let shouldTerminateGame = true;
  state.players.forEach(player => {
    if(player.canHit) shouldTerminateGame = false;
  });
  state.activeGame = !shouldTerminateGame;
  return state;
}

function calculateScore(playerId, state){
  let score = 0;
  state.players[playerId].hand.forEach(card => {
      score += card.value;
  });
  state.players[playerId].total = score;
  return state;
}
