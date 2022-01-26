import {combineReducers} from 'redux';
import {categoryList} from './CategoryListReducer';
import {phrases} from './PhrasesReducer';
import {seenPhrases} from './SeenPhrasesReducer';
import {learntPhrases} from './LearntPhrasesReducer';
import {categoryListId} from './CategoryListIdReducer';
import {leaningSreenData} from './LearningScreenDataReducer';
import {categoryName} from './CategoryNameReducer';
export default combineReducers({
  categoryList,
  categoryListId,
  phrases,
  categoryName,
  leaningSreenData,
  seenPhrases,
  learntPhrases,
});
