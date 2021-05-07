import React from 'react';
import {StyleSheet, SafeAreaView, View, TouchableOpacity} from 'react-native';
import {leariningScreenManager} from '../../ListManagers/LearningScreenManager';
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
    phraseObjToDisplayInTextarea,
    categoryName,
    updatedPhrasesArrWithIncorrectPhrase,
    isListItemDisabled,
    isAnswerCorrect,
    isAnswerIncorrect,
    showNextButton,
    chooseAnswers,
    handleNextButton,
  } = leariningScreenManager();

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
                        onPress={() => chooseAnswers(item, item?.id)}>
                        <ListItem
                          categoryName={item?.name.en}
                          onPress={() => chooseAnswers(item, item?.id)}
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
