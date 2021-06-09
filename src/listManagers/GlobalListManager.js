import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCategoryList, setPrases} from '../actions';
import {shufflePhrasesArr} from './UtilsFuctions';

// Global custom hook file
export const globalListManager = () => { // use the naming convention react wants you to use
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(true);
  const [categoryToDisplayId, setCategoryToDisplayId] = useState(null);
  const [randomPhraseAnswersArray, setRandomPhraseAnswersArray] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const dispatch = useDispatch();
  const categoryListState = useSelector(state => state.categoryList);
  const seenPhrases = useSelector(state => state.seenPhrases);
  const learntPhrases = useSelector(state => state.learntPhrases);
  const phrasesState = useSelector(state => state.phrases);
  const categoryListId = useSelector(state => state.categoryListId);
  const {categoryList, isLoading} = categoryListState;
  const {phrases} = phrasesState;

  useEffect(() => {
    dispatch(getCategoryList());
    dispatch(setPrases());
  }, []);

  const getPhraseForCategory = () => {
    // Find the category obj by the id from the list item
    const category =
      categoryList &&
      !isLoading &&
      categoryList.categories.find(category => category.id === categoryListId);
    // For the category name in learning screen
    setCategoryName(category);
  };

  function getPhrasesArrayFromCategoryList(phrasesArr) {
    // FIltering the phrases by the categorylist id
    //  but removing the hash and the numbers in that id
    return (
      phrasesArr && // This check is not necessary
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
    if (phrasesArr) {// You will only have categories that exist so you don't need to complicate it with checks. If the data was really not there, crashing the app would be reasonable
      // A new phrases arr with its items disordered
      const shuffledPhrasesArray = shufflePhrasesArr(phrasesArr);
      // This array is used for data representation in learning screen
      const phrasesArray = [ // Why? Why the second till 5th element? Why not with slice?
        shuffledPhrasesArray[1],
        shuffledPhrasesArray[2],
        shuffledPhrasesArray[3],
        shuffledPhrasesArray[4],
      ];
      setRandomPhraseAnswersArray(phrasesArray);
    }
  }

  useEffect(() => {
    setPhrasesToDisplayInLearningScreen(phrases);
  }, [phrases]);

  return {
    isEnglishLanguage,
    setIsEnglishLanguage,
    categoryList,
    phrases,
    setPhrasesToDisplayInLearningScreen,
    seenPhrases,
    learntPhrases,
    randomPhraseAnswersArray,
    categoryName,
    categoryToDisplayId,
    setCategoryToDisplayId,
  };
};
