import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {getCategoryList} from '../../actions';
import HomeHeader from './HomeHeader';
import List from '../../components/List/List';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ListItem from '../../components/ListItem/ListItem';
import GlobalStyles from '../../constants/GlobalStyles';

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
  const [isEnglishLanguage, setIsEnglishLanguage] = useState(true);
  const dispatch = useDispatch();
  const categoryListState = useSelector(state => state.categoryList);
  const seenPhrases = useSelector(state => state.seenPhrases);
  const learntPhrases = useSelector(state => state.learntPhrases);
  const {categoryList, isLoading} = categoryListState;

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

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
          <List
            isEnglishLanguage={isEnglishLanguage}
            onPress={() => alert('Learn phrases about in this category')}
            data={categoryList && !isLoading && categoryList.categories}
            heading={
              isEnglishLanguage ? 'Category List' : 'Lisitry ny sokajy misy'
            }
          />
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
