// import createInitialGrid from './App.js';

const initialState = {
  gameState: "start",
  gridStats: [{x:0,y:0},{x:42,y:42}],// createInitialGrid(10),
}

function rootReducer(state = initialState, action) {
  return state;
}

export default rootReducer;
