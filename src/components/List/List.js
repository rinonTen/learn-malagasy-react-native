import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView, View} from 'react-native';
import ListItem from '../ListItem/ListItem';
import SectionHeading from '../SectionHeading/SectionHeading';
import GlobalStyles from '../../constants/GlobalStyles';

export const FlatListItemSeparator = () => {
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
        <View style={[GlobalStyles.listContainer, GlobalStyles.listBorder]}>
          {data &&
            data.map(item => {
              return (
                <React.Fragment key={item?.id}>
                  <TouchableOpacity onPress={onPress}>
                    <ListItem
                      categoryName={
                        isEnglishLanguage ? item?.name.en : item?.name.mg
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
