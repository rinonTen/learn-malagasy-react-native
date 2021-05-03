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
  const categoryListId = useSelector(state => state.categoryListId);
  const {categoryList, isLoading} = categoryListState;
  const {phrases, learningPhrases} = phrasesState;

  useEffect(() => {
    dispatch(getCategoryList());
    dispatch(setPrases());
  }, []);

  function getRandomItem(arr) {
    return arr && arr[Math.floor(Math.random() * arr.length)];
  }

  // Function picking random values from array
  const getRandomIdFromArray = phrasesArray => {
    let arrayOfAlreadyUsedIds = [];
    // If arrayOfAlreadyUsedIds is empty then fill it will indexes equal to the size of phrasesArray
    if (arrayOfAlreadyUsedIds.length === 0) {
      for (let i = 0; i < phrasesArray.length; i++)
        arrayOfAlreadyUsedIds.push(i);
    }
    let randomValueIndex = Math.floor(
      Math.random() * arrayOfAlreadyUsedIds.length,
    );
    let indexOfItemInTheArray = arrayOfAlreadyUsedIds[randomValueIndex];
    // remove this index from arrayOfAlreadyUsedIds array because we are accessing it now.
    arrayOfAlreadyUsedIds.splice(randomValueIndex, 1);
    // Get the value
    return phrasesArray[indexOfItemInTheArray];
  };

  const getPhraseForCategory = () => {
    const category =
      categoryList &&
      !isLoading &&
      categoryList.categories.find(category => category.id === categoryListId);
    const randomIdOne = getRandomItem(category?.phrasesIds);
    const randomIdTwo = getRandomItem(category?.phrasesIds);
    const randomIdThree = getRandomItem(category?.phrasesIds);
    const randomIdFour = getRandomItem(category?.phrasesIds);
    setCategoryName(isEnglishLanguage ? category?.name.en : category?.name.ma);
    // Conditions to make phrases displayed in the learning screen to be different
    if (
      randomIdOne !== randomIdTwo &&
      randomIdOne !== randomIdThree &&
      randomIdOne !== randomIdFour
    ) {
      setPhraseIdToDisplay1(randomIdOne);
    } else {
      setPhraseIdToDisplay1(getRandomItem(category?.phrasesIds));
    }

    if (
      randomIdTwo !== randomIdOne &&
      randomIdTwo !== randomIdThree &&
      randomIdTwo !== randomIdFour
    ) {
      setPhraseIdToDisplay2(randomIdTwo);
    } else {
      setPhraseIdToDisplay2(getRandomItem(category?.phrasesIds));
    }

    if (
      randomIdThree !== randomIdOne &&
      randomIdThree !== randomIdTwo &&
      randomIdThree !== randomIdFour
    ) {
      setPhraseIdToDisplay3(randomIdThree);
    } else {
      setPhraseIdToDisplay3(getRandomItem(category?.phrasesIds));
    }

    if (
      randomIdFour !== randomIdOne &&
      randomIdFour !== randomIdTwo &&
      randomIdFour !== randomIdThree
    ) {
      setPhraseIdToDisplay4(randomIdFour);
    } else {
      setPhraseIdToDisplay4(getRandomItem(category?.phrasesIds));
    }
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
