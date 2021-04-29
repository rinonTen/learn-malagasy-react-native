import {combineReducers} from 'redux';
import {categoryList} from './categoryListReducer';
import {seenPhrases} from './seenPhrasesReducer';
import {learntPhrases} from './learntPhrasesReducer';

export default combineReducers({
  categoryList,
  seenPhrases,
  learntPhrases,
});
