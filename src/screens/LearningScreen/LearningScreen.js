import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, View, TouchableOpacity} from 'react-native';
import {useContext} from '../../context/globalContext';
import ScreenHeader from './LeariningScreenHeader';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import PhraseTextarea from '../../components/PhraseTextarea/phraseTextarea';
import ListItem from '../../components/ListItem/ListItem';
import GlobalStyles from '../../constants/GlobalStyles';
import NextButton from '../../components/NextButton/NextButton';

const style = StyleSheet.create({
  nextButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 365,
    paddingTop: 60,
  },
});

export default () => {
  const {
    randomPhraseAnswersArray,
    categoryName,
    phrases,
    setPhrasesToDisplayInLearningScreen,
  } = useContext();
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isAnswerIncorrect, setIsAnswerIncorrect] = useState(false);
  const [itemId, setItemId] = useState('');
  const [isListItemDisabled, setIsListItemDisabled] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [
    phraseObjToDisplayInTextarea,
    setphraseObjToDisplayInTextarea,
  ] = useState({});

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
        ...phrase,
        isIncorrect: !phrase.isIncorrect,
      };
    }
    return {...phrase};
  });
  // A function that handles choosing an answer and the behaviours of the buttons
  function chooseAnswers(itemId) {
    setItemId(itemId);
    if (phraseObjToDisplayInTextarea?.id === itemId) {
      setIsAnswerCorrect(true);
      setShowNextButton(!showNextButton);
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

  return (
    <SafeAreaView>
      <View style={GlobalStyles.container}>
        <ScreenHeader />
        <View>
          <SectionHeading text={`Category: ${categoryName}`} />
        </View>
        <View>
          <SectionHeading text="The phrase" />
          <PhraseTextarea
            phrase={
              phraseObjToDisplayInTextarea &&
              phraseObjToDisplayInTextarea.name?.en
            }
            editable={false}
          />
        </View>
        <View style={{marginTop: 37}}>
          <SectionHeading text={'Select a category:'} />
          <View style={{backgroundColor: '#ffffff'}}>
            <View>
              {updatedPhrasesArrWithIncorrectPhrase &&
                updatedPhrasesArrWithIncorrectPhrase.map(item => {
                  return (
                    <React.Fragment key={item?.id}>
                      <TouchableOpacity
                        disabled={isListItemDisabled}
                        onPress={() => chooseAnswers(item?.id)}>
                        <ListItem
                          categoryName={item?.name.en}
                          onPress={() => chooseAnswers(item?.id)}
                          text="Pick"
                          isCorrect={
                            isAnswerCorrect &&
                            phraseObjToDisplayInTextarea?.id === item?.id
                          }
                          isIncorrect={isAnswerIncorrect && item?.isIncorrect}
                        />
                      </TouchableOpacity>
                    </React.Fragment>
                  );
                })}
            </View>
          </View>
        </View>
        {showNextButton && (
          <View style={style.nextButtonContainer}>
            <View style={{width: 90}}>
              <NextButton
                onPress={() => handleNextButton()}
                isDisabled={false}
                title="Next"
              />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
