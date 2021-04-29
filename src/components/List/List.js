import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import ListItem from '../ListItem/ListItem';
import SectionHeading from '../SectionHeading/SectionHeading';

const styles = StyleSheet.create({
  commonStyles: {
    borderBottomColor: '#E5E5E5',
    borderWidth: 1,
  },
  container: {
    borderRadius: 3,
  },
});

const FlatListItemSeparator = () => {
  return <View style={styles.commonStyles} />;
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
        <FlatList
          style={[styles.container, styles.commonStyles]}
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity onPress={onPress}>
              <ListItem
                categoryName={isEnglishLanguage ? item.name.en : item.name.mg}
                onPress={onPress}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <FlatListItemSeparator />}
        />
      </View>
    </SafeAreaView>
  );
}
