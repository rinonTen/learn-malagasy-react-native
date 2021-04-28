import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({categoryListReducer});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
