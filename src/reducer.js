// import createInitialGrid from './App.js';
import { handleActions } from 'redux-actions';
import { startGame, pauseGame } from './actions.js';

const initialState = {
  gameState: "start",
  gridStats: [{x:0,y:0},{x:42,y:42}],// createInitialGrid(10),
}

const rootReducer = handleActions(
  {
    [startGame]: (
      state,
      { payload: { gameState}}
    ) => {
      return {...initialState}
    }
  },
  initialState
);

export default rootReducer;
