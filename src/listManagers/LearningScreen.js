import {useEffect, useState} from 'react';
import {globalListManager} from './GlobalListManager';
import {useDispatch} from 'react-redux';
import {setLearntPrases} from '../actions';
// Custom hook for learning screen
export const learningScreenManager = () => {
  const {
    randomPhraseAnswersArray,
    phrases,
    categoryName,
    setPhrasesToDisplayInLearningScreen,
  } = globalListManager();

  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isAnswerIncorrect, setIsAnswerIncorrect] = useState(false);
  const [itemId, setItemId] = useState('');
  const [isListItemDisabled, setIsListItemDisabled] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [
    phraseObjToDisplayInTextarea,
    setphraseObjToDisplayInTextarea,
  ] = useState({});
  const [isEnglishPrimaryLanguage, setIsEnglishPrimaryLanguage] = useState(
    true,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // Pick one object from the random phrases array to display in textarea
    const randomPhraseObj =
      randomPhraseAnswersArray[
        Math.floor(Math.random() * randomPhraseAnswersArray.length)
      ];
    setphraseObjToDisplayInTextarea(randomPhraseObj);
  }, [randomPhraseAnswersArray]);

  // Adding isIncorrect attribute to each obj in the answers array
  const newPhrasesArr = randomPhraseAnswersArray.map(phrase => {
    const newPhrase = {
      id: phrase.id,
      name: {
        en: phrase.name.en,
        mg: phrase.name.mg,
      },
      // Simplify this by just mapping phrase.isIncorrect = false, this will create it.
      isIncorrect: false,
    };
    return newPhrase;
  }); 

  // Find the wrong answer from the array of answers and and 'isIncorrect' attribute
  const updatedPhrasesArrWithIncorrectPhrase = newPhrasesArr.map(phrase => {
    if (
      phrase.id === itemId &&
      phrase.id !== phraseObjToDisplayInTextarea?.id
    ) {
      return {
        ...phrase, // See line 46
        isIncorrect: !phrase.isIncorrect,
      };
    }
    return {...phrase};
  });
  // A function that handles choosing an answer and the behaviours of the buttons
  function chooseAnswers(phrase, itemId) {
    setItemId(itemId);
    if (phraseObjToDisplayInTextarea?.id === itemId) {
      setIsAnswerCorrect(true);
      setShowNextButton(!showNextButton);
      // Set the right phrase to the learnt phrases store
      dispatch(setLearntPrases(phrase));
    } else {
      setIsAnswerCorrect(true);
      setIsAnswerIncorrect(true);
    }
    setIsListItemDisabled(!isListItemDisabled);
  }

  function handleNextButton() {
    setIsListItemDisabled(!isListItemDisabled);
    setShowNextButton(!showNextButton);
    setIsAnswerCorrect(false);
    setPhrasesToDisplayInLearningScreen(phrases);
  }

  return {
    phraseObjToDisplayInTextarea,
    categoryName,
    updatedPhrasesArrWithIncorrectPhrase,
    isListItemDisabled,
    isAnswerCorrect,
    isAnswerIncorrect,
    showNextButton,
    chooseAnswers,
    handleNextButton,
    isEnglishPrimaryLanguage,
    setIsEnglishPrimaryLanguage,
  };
};
