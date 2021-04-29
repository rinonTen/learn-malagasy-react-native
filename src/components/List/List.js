import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView, View} from 'react-native';
import ListItem from '../ListItem/ListItem';
import SectionHeading from '../SectionHeading/SectionHeading';
import GlobalStyles from '../../constants/GlobalStyles';

const FlatListItemSeparator = () => {
  return <View style={GlobalStyles.listBorder} />;
};

export default function ListItemComponent({
  onPress = () => {},
  data,
  isEnglishLanguage,
  heading,
}) {
  return (
    <SafeAreaView>
      <SectionHeading text={heading} />
      <View style={{backgroundColor: '#ffffff'}}>
<<<<<<< HEAD
        <View style={[GlobalStyles.listContainer, GlobalStyles.listBorder]}>
          {data &&
            data.map(item => {
              return (
                <React.Fragment key={item.id}>
                  <TouchableOpacity onPress={onPress}>
=======
        <View style={[styles.container, styles.commonStyles]}>
          {data &&
            data.map(item => {
              return (
                <React.Fragment>
                  <TouchableOpacity onPress={onPress} key={item.id}>
>>>>>>> Removing flatList from the list because it is not supporteb by android when nested inside scrollView
                    <ListItem
                      categoryName={
                        isEnglishLanguage ? item.name.en : item.name.mg
                      }
                      onPress={onPress}
                    />
                  </TouchableOpacity>
                  <FlatListItemSeparator />
                </React.Fragment>
              );
            })}
        </View>
      </View>
    </SafeAreaView>
  );
}
