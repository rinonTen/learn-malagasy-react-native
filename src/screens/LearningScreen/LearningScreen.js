import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useContext} from '../../context/globalContext';
import ScreenHeader from './LeariningScreenHeader';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import PhraseTextarea from '../../components/PhraseTextarea/phraseTextarea';
import List from '../../components/List/List';
import GlobalStyles from '../../constants/GlobalStyles';

export default () => {
  const {randomPhraseAnswersArray, categoryName} = useContext();
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
          {randomPhraseAnswersArray && (
            <List
              onPress={() => {}}
              data={randomPhraseAnswersArray}
              heading={'Pick a solution'}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
