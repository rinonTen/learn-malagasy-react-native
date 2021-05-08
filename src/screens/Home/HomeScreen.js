import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import HomeHeader from './HomeScreenHeader';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import List from '../../components/List/List';
import ListItem from '../../components/ListItem/ListItem';
import GlobalStyles from '../../constants/GlobalStyles';
import {globalListManager} from '../../listManagers/GlobalListManager';
import {setCategoryId, setCategoryName} from '../../actions';

const styles = StyleSheet.create({
  phraseListItem: {
    backgroundColor: '#ffffff',
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3,
  },
  sectionContainer: {
    marginTop: 15,
  },
});

export default ({navigation}) => {
  const {
    isEnglishLanguage,
    setIsEnglishLanguage,
    categoryList,
    learntPhrases,
    seenPhrases,
    getLearntPhrases,
    getSeenPhrases,
  } = globalListManager();

  const dispatch = useDispatch();

  // Setting the category id
  function handleListOnPress(listId) {
    dispatch(setCategoryId(listId));
    navigation.navigate('LearningScreen');
  }

  // Handling onPress in learnt phrases item
  function learntPhraseOnPress(learntPhrases) {
    getLearntPhrases(learntPhrases);
    dispatch(
      setCategoryName({
        name: {
          en: 'Learnt phrases',
          mg: 'Fehezanteny efa nianarana',
        },
      }),
    );
    navigation.navigate('LearningScreen');
  }

  // Handling onPress in Seen phrases item
  function seenPhraseOnPress(seenPhrases) {
    getSeenPhrases(seenPhrases);
    dispatch(
      setCategoryName({
        name: {
          en: 'Seen phrases',
          mg: 'Fehezanteny efa hita',
        },
      }),
    );
    navigation.navigate('LearningScreen');
  }

  const PhrasesComponent = ({
    listItemName,
    headingText,
    onPress = () => {},
    isEnglishLanguage,
  }) => {
    return (
      <View style={styles.sectionContainer}>
        <SectionHeading text={headingText} />
        <TouchableOpacity style={styles.phraseListItem} onPress={onPress}>
          <ListItem
            categoryName={listItemName}
            onPress={onPress}
            text={isEnglishLanguage ? 'Learn' : 'Hianatra'}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <ScrollView>
        <View style={[GlobalStyles.container, {paddingBottom: 66}]}>
          <HomeHeader
            switchLanguage={() => setIsEnglishLanguage(!isEnglishLanguage)}
          />
          <List
            heading={
              isEnglishLanguage ? 'Select a category:' : 'Mifidiana sokajy iray'
            }>
            {categoryList &&
              categoryList?.categories.map(item => {
                return (
                  <React.Fragment key={item?.id}>
                    <TouchableOpacity
                      onPress={() => handleListOnPress(item?.id)}>
                      <ListItem
                        categoryName={
                          isEnglishLanguage ? item?.name.en : item?.name.mg
                        }
                        onPress={() => handleListOnPress(item?.id)}
                        text={isEnglishLanguage ? 'Learn' : 'Hianatra'}
                      />
                    </TouchableOpacity>
                  </React.Fragment>
                );
              })}
          </List>
          {seenPhrases.length >= 1 && (
            <PhrasesComponent
              pharasesArr={seenPhrases}
              onPress={() => seenPhraseOnPress(seenPhrases)}
              isEnglishLanguage={isEnglishLanguage}
              headingText={
                isEnglishLanguage ? 'Seen phrases' : 'Fehezanteny efa hita'
              }
              listItemName={
                isEnglishLanguage
                  ? `${seenPhrases.length} seen phrases`
                  : `${seenPhrases.length} ny fehezanteny efa hita`
              }
            />
          )}
          {learntPhrases.length >= 1 && (
            <PhrasesComponent
              pharasesArr={learntPhrases}
              onPress={() => learntPhraseOnPress(learntPhrases)}
              isEnglishLanguage={isEnglishLanguage}
              headingText={
                isEnglishLanguage
                  ? 'Learnt phrases'
                  : 'Fehezanteny efa nianarana'
              }
              listItemName={
                isEnglishLanguage
                  ? `${learntPhrases.length} learnt phrases`
                  : `${learntPhrases.length} ny fehezanteny efa nianarana`
              }
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
