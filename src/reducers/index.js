import {combineReducers} from 'redux';
import {categoryList} from './CategoryListReducer';
import {phrases} from './PhrasesReducer';
import {seenPhrases} from './SeenPhrasesReducer';
import {learntPhrases} from './LearntPhrasesReducer';
import {categoryListId} from './CategoryListIdReducer';

export default combineReducers({
  categoryList,
  categoryListId,
  phrases,
  seenPhrases,
  learntPhrases,
});
