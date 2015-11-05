import {List} from 'immutable';

const INITIAL_STATE = new List();

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case 'HIT': return state.concat('I hit!');
    case 'STAY': return state.concat('I Stay!');
  }
  return state;
}
