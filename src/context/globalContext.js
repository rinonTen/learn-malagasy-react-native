import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCategoryList, setPrases} from '../actions';

export const useContext = () => {
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(true);
  const [phraseIdToDisplay1, setPhraseIdToDisplay1] = useState('');
  const [phraseIdToDisplay2, setPhraseIdToDisplay2] = useState('');
  const [phraseIdToDisplay3, setPhraseIdToDisplay3] = useState('');
  const [phraseIdToDisplay4, setPhraseIdToDisplay4] = useState('');
  const [categoryToDisplayId, setCategoryToDisplayId] = useState(null);
  const [randomPhraseAnswersArray, setRandomPhraseAnswersArray] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const dispatch = useDispatch();
  const categoryListState = useSelector(state => state.categoryList);
  const seenPhrases = useSelector(state => state.seenPhrases);
  const learntPhrases = useSelector(state => state.learntPhrases);
  const phrasesState = useSelector(state => state.phrases);

  const {categoryList, isLoading} = categoryListState;
  const {phrases, learningPhrases} = phrasesState;

  useEffect(() => {
    dispatch(getCategoryList());
    dispatch(setPrases());
  }, []);

  function getRandomItem(arr) {
    return arr && arr[Math.floor(Math.random() * arr.length)];
  }

  const getPhraseForCategory = () => {
    const category =
      categoryList &&
      !isLoading &&
      categoryList.categories.find(
        category => category.id === categoryToDisplayId,
      );
    console.log(categoryToDisplayId);
    const randomIdOne = getRandomItem(category?.phrasesIds);
    const randomIdTwo = getRandomItem(category?.phrasesIds);
    const randomIdThree = getRandomItem(category?.phrasesIds);
    const randomIdFour = getRandomItem(category?.phrasesIds);
    setCategoryName(isEnglishLanguage ? category?.name.en : category?.name.ma);
    setPhraseIdToDisplay1(randomIdOne);
    setPhraseIdToDisplay2(randomIdTwo);
    setPhraseIdToDisplay3(randomIdThree);
    setPhraseIdToDisplay4(randomIdFour);
  };

  useEffect(() => {
    getPhraseForCategory();
  }, [categoryListState, phrasesState]);

  const getPhraseObjFromCategoryList = (phrasesArr, id) => {
    return phrasesArr && phrasesArr.find(cat => cat.id === id);
  };

  // Create an array of the answers from the phrases array and the random IDs
  useEffect(() => {
    const answersArray = [
      getPhraseObjFromCategoryList(phrases, phraseIdToDisplay1),
      getPhraseObjFromCategoryList(phrases, phraseIdToDisplay2),
      getPhraseObjFromCategoryList(phrases, phraseIdToDisplay3),
      getPhraseObjFromCategoryList(phrases, phraseIdToDisplay4),
    ];
    //TODO
    setRandomPhraseAnswersArray(answersArray);
  }, [phrasesState, categoryListState]);

  return {
    isEnglishLanguage,
    setIsEnglishLanguage,
    categoryList,
    seenPhrases,
    learntPhrases,
    randomPhraseAnswersArray,
    categoryName,
    categoryToDisplayId,
    setCategoryToDisplayId,
  };
};
