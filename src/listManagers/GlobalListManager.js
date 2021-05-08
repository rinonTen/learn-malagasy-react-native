import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  getCategoryList,
  setPhrases,
  setLearningScreenData,
  setCategoryName,
  setLearnPhrases,
} from '../actions';
import {shufflePhrasesArr, removeDuplicateItems} from './UtilsFuctions';

// Global custom hook file
export const globalListManager = () => {
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(true);
  const [categoryToDisplayId, setCategoryToDisplayId] = useState(null);
  const dispatch = useDispatch();
  const categoryListState = useSelector(state => state.categoryList);
  const categoryNameValue = useSelector(state => state.categoryName);
  const {categoryName} = categoryNameValue;
  const seenPhrases = useSelector(state => state.seenPhrases);
  const learntPhrases = useSelector(state => state.learntPhrases);
  const phrasesState = useSelector(state => state.phrases);
  const categoryListId = useSelector(state => state.categoryListId);
  const randomPhraseAnswersArray = useSelector(state => state.leaningSreenData);
  const {categoryList, isLoading} = categoryListState;
  const {phrases} = phrasesState;

  useEffect(() => {
    dispatch(getCategoryList());
    dispatch(setPhrases());
  }, []);

  const getPhraseForCategory = () => {
    // Find the category obj by the id from the list itemst item
    const category =
      categoryList &&
      !isLoading &&
      categoryList.categories.find(category => category.id === categoryListId);
    // For the category name in learning screen
    dispatch(setCategoryName(category));
  };

  function getPhrasesArrayFromCategoryList(phrasesArr) {
    // FIltering the phrases by the categorylist id but with the ### and numbers being removed and the numbers in that id
    return (
      phrasesArr &&
      phrasesArr.filter(cat =>
        cat.id.includes(categoryListId.slice(3, categoryListId.length - 3)),
      )
    );
  }

  useEffect(() => {
    getPhraseForCategory();
  }, [categoryListState]);

  function setPhrasesToDisplayInLearningScreen(phrases) {
    // Create an array of the answers from the phrases array and the random ID
    const phrasesArr = getPhrasesArrayFromCategoryList(phrases);
    if (phrasesArr) {
      // A new phrases arr with its items disordered
      const shuffledPhrasesArray = shufflePhrasesArr(phrasesArr);
      // This array is used for data representation in learning screen
      const phrasesArray = [
        shuffledPhrasesArray[1],
        shuffledPhrasesArray[2],
        shuffledPhrasesArray[3],
        shuffledPhrasesArray[4],
      ];
      dispatch(setLearningScreenData(phrasesArray));
    }
  }

  useEffect(() => {
    setPhrasesToDisplayInLearningScreen(phrases);
  }, [phrases]);

  // Setting data for the learnt phrases

  function getLearntPhrases(learntPhrasesArr) {
    // Remove duplicates
    const learntPhrasesDuplicatesRemoved = removeDuplicateItems(
      learntPhrasesArr,
    );
    dispatch(setLearningScreenData(learntPhrasesDuplicatesRemoved));
  }

  function getSeenPhrases(seenPhrases) {
    // Remove duplicates
    const seenPhrasesDuplicatesRemoved = removeDuplicateItems(seenPhrases);
    dispatch(setLearningScreenData(seenPhrasesDuplicatesRemoved));
  }

  return {
    isEnglishLanguage,
    setIsEnglishLanguage,
    categoryList,
    phrases,
    setPhrasesToDisplayInLearningScreen,
    seenPhrases,
    setLearnPhrases,
    learntPhrases,
    randomPhraseAnswersArray,
    setCategoryName,
    categoryName,
    categoryToDisplayId,
    setCategoryToDisplayId,
    getLearntPhrases,
    getSeenPhrases,
  };
};
