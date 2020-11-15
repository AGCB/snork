import { createActions } from 'redux-actions';

export const { startGame, pauseGame } = createActions({
  CREATE_GAME: () => ({gameState: 'start'}),
  PAUSE_GAME: () => ({gameState: 'pause'}),
})

const foo = x => x;

export default foo;
