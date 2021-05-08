import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import HomeHeader from './HomeScreenHeader';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import List from '../../components/List/List';
import ListItem from '../../components/ListItem/ListItem';
import GlobalStyles from '../../constants/GlobalStyles';
import {globalListManager} from '../../listManagers/GlobalListManager';
import {useDispatch} from 'react-redux';
import {
  setCategoryId,
  setCategoryName,
  setLearningScreenData,
} from '../../actions';

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
    seenPhrases,
    learntPhrases,
  } = globalListManager();
  const dispatch = useDispatch();
  // Setting the category id
  function handleListOnPress(listId) {
    dispatch(setCategoryId(listId));
    navigation.navigate('LearningScreen');
  }

  // Handling onPress in learnt phrases item
  function learntPhraseOnPress(learntPhrases) {
    dispatch(setLearningScreenData(learntPhrases));
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
          {/* {seenPhrases.length >= 1 && (
            <PhrasesComponent
              pharasesArr={seenPhrases}
              onPress={() => navigation.navigate('LearningScreen')}
              headingText={
                isEnglishLanguage ? 'Seen phrases' : 'Fehezanteny efa hita'
              }
            />
          )} */}
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
