import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import HomeHeader from './HomeHeader';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import List from '../../components/List/List';
import ListItem from '../../components/ListItem/ListItem';
import GlobalStyles from '../../constants/GlobalStyles';
import {globalListManager} from '../../listManagers/GlobalListManager';
import {useDispatch} from 'react-redux';
import {setCategoryId} from '../../actions';

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

  const PhrasesComponent = ({pharasesArr, headingText}) => {
    return (
      <View style={styles.sectionContainer}>
        <SectionHeading text={headingText} />
        <TouchableOpacity style={styles.phraseListItem}>
          <ListItem
            categoryName={
              isEnglishLanguage
                ? `${pharasesArr.length} seen phrases`
                : `teny sy fehezanteny ${pharasesArr.length}`
            }
            onPress={() => navigation.navigate('LearningScreen')}
            text="Learn"
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
              headingText={
                isEnglishLanguage ? 'Seen phrases' : 'Fehezanteny efa hita'
              }
            />
          )}
          {learntPhrases.length >= 1 && (
            <PhrasesComponent
              pharasesArr={learntPhrases}
              headingText={
                isEnglishLanguage
                  ? 'Learnt phrases'
                  : 'Fehezanteny efa nianarana'
              }
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
