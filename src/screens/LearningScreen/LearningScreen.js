import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {learningScreenManager} from '../../listManagers/LearningScreen';
import ScreenHeader from './LeariningScreenHeader';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import PhraseTextarea from '../../components/PhraseTextarea/PhraseTextarea';
import List from '../../components/List/List';
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
  headingCotainer: {display: 'flex', flexDirection: 'row', marginBottom: 10},
  headingText: {
    fontFamily: 'Inter',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '400',
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
  } = learningScreenManager();

  const [isEnglishPrimaryLanguage, setIsEnglishPrimaryLanguage] = useState(
    true,
  );

  return (
    <SafeAreaView>
      <View style={GlobalStyles.container}>
        <ScreenHeader
          switchLanguage={() =>
            setIsEnglishPrimaryLanguage(!isEnglishPrimaryLanguage)
          }
        />
        <View style={style.headingCotainer}>
          <SectionHeading
            text={isEnglishPrimaryLanguage ? `Category: ` : `Sokajy: `}
          />
          <Text style={style.headingText}>{categoryName}</Text>
        </View>
        <View style={{marginBottom: 37}}>
          <SectionHeading
            text={isEnglishPrimaryLanguage ? 'The phrases:' : 'Ny fehezanteny:'}
          />
          <PhraseTextarea
            phrase={
              phraseObjToDisplayInTextarea &&
              (isEnglishPrimaryLanguage
                ? phraseObjToDisplayInTextarea.name?.en
                : phraseObjToDisplayInTextarea.name?.mg)
            }
            editable={false}
          />
        </View>
        <List
          heading={
            isEnglishPrimaryLanguage
              ? 'Pick a solution:'
              : 'Mifidiana valiny iray:'
          }>
          {updatedPhrasesArrWithIncorrectPhrase &&
            updatedPhrasesArrWithIncorrectPhrase.map(item => {
              return (
                <React.Fragment key={item?.id}>
                  <TouchableOpacity
                    disabled={isListItemDisabled}
                    onPress={() => chooseAnswers(item, item?.id)}>
                    <ListItem
                      categoryName={
                        isEnglishPrimaryLanguage ? item?.name.mg : item?.name.en
                      }
                      onPress={() => chooseAnswers(item, item?.id)}
                      text={isEnglishPrimaryLanguage ? 'Hifidy' : 'Pick'}
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
        </List>
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
    </SafeAreaView>
  );
};
