import {combineReducers} from 'redux';
import {categoryList} from './categoryListReducer';
import {phrases} from './PhrasesReducer';
import {seenPhrases} from './SeenPhrasesReducer';
import {learntPhrases} from './LearntPhrasesReducer';
import {categoryListId} from './categoryListIdReducer';

export default combineReducers({
  categoryList,
  categoryListId,
  phrases,
  seenPhrases,
  learntPhrases,
});
