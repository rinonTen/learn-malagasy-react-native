import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ListItem from '../ListItem/ListItem';
import SectionHeading from '../SectionHeading/SectionHeading';
const styles = StyleSheet.create({
  container: {
    borderColor: '#E5E5E5',
    borderWidth: 1,
  },
});

const FlatListItemSeparator = () => {
  return <View style={styles.container} />;
};

export default function ListItemComponent({
  heading,
  onPress = () => {},
  isEnglishLanguage,
  data,
}) {
  return (
    <SafeAreaView>
      <SectionHeading text={heading} />
      <FlatList
        style={styles.container}
        data={data}
        onPress={onPress}
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
    </SafeAreaView>
  );
}
