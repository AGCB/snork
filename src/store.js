import { createStore } from 'redux';
import rootReducer from './reducer.js';

const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());

export default store;
