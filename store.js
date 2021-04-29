import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import categoryList from './src/reducers/categoryListReducer';
import state from './state';

const rootReducer = combineReducers({categoryList: categoryList});

const configureStore = () => {
  return createStore(rootReducer, state, applyMiddleware(thunk));
};

export default configureStore;
