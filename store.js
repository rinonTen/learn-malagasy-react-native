import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import state from './state';

const configureStore = () => {
  return createStore(reducers, state, applyMiddleware(thunk));
};

export default configureStore;
