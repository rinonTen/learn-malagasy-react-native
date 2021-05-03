import {combineReducers} from 'redux';
import {categoryList} from './categoryListReducer';
import {phrases} from './phrasesReducer';
import {seenPhrases} from './seenPhrasesReducer';
import {learntPhrases} from './learntPhrasesReducer';
import {categoryListId} from './categoryListIdReducer';

export default combineReducers({
  categoryList,
  categoryListId,
  phrases,
  seenPhrases,
  learntPhrases,
});
