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
import ListItem from '../../components/ListItem/ListItem';
import GlobalStyles from '../../constants/GlobalStyles';
import {useContext} from '../../ListManagers/GlobalListManager';
import {useDispatch} from 'react-redux';
import {setCategoryId} from '../../actions';

const styles = StyleSheet.create({
  phraseListItem: {
    backgroundColor: '#ffffff',
    borderStartColor: '#E5E5E5',
    borderEndColor: '#E5E5E5',
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
  } = useContext();
  const dispatch = useDispatch();
  // Setting the category id
  function handleListOnPress(listId) {
    dispatch(setCategoryId(listId));
    navigation.navigate('LearningScreen');
  }

  const PhrasesComponent = ({pharasesArr}) => {
    return (
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
    );
  };

  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <ScrollView>
        <View style={[GlobalStyles.container, {paddingBottom: 66}]}>
          <HomeHeader
            switchLanguage={() => setIsEnglishLanguage(!isEnglishLanguage)}
          />
          <SectionHeading text={'Select a category:'} />
          <View style={{backgroundColor: '#ffffff'}}>
            <View style={[GlobalStyles.listContainer, GlobalStyles.listBorder]}>
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
                          text="Learn"
                        />
                      </TouchableOpacity>
                    </React.Fragment>
                  );
                })}
            </View>
          </View>
          {seenPhrases.length >= 1 && (
            <View style={styles.sectionContainer}>
              <SectionHeading
                text={
                  isEnglishLanguage ? 'Seen phrases' : 'Fehezanteny efa hita'
                }
              />
              <PhrasesComponent pharasesArr={seenPhrases} />
            </View>
          )}
          {learntPhrases.length >= 1 && (
            <View style={styles.sectionContainer}>
              <SectionHeading
                text={
                  isEnglishLanguage
                    ? 'Learnt phrases'
                    : 'Fehezanteny efa nianarana'
                }
              />
              <PhrasesComponent pharasesArr={learntPhrases} />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
