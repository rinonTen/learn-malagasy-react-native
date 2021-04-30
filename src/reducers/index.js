import {combineReducers} from 'redux';
import {categoryList} from './categoryListReducer';
import {phrases} from './phrasesReducer';
import {seenPhrases} from './seenPhrasesReducer';
import {learntPhrases} from './learntPhrasesReducer';

export default combineReducers({
  categoryList,
  phrases,
  seenPhrases,
  learntPhrases,
});
