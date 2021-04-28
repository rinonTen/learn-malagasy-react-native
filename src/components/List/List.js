import * as React from 'react';
import {
<<<<<<< HEAD
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ListItem from '../ListItem/ListItem';
import SectionHeading from '../SectionHeading/SectionHeading';
const styles = StyleSheet.create({
  defaultStyles: {
    borderColor: '#E5E5E5',
    borderWidth: 1,
  },
});

const FlatListItemSeparator = () => {
  return <View style={styles.defaultStyles} />;
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
        style={[styles.defaultStyles, styles.container]}
        data={data}
        onPress={onPress}
        renderItem={({item}) => (
          <TouchableOpacity onPress={onPress}>
            <ListItem
              categoryName={isEnglishLanguage ? item.name.en : item.name.mg}
              // onPress={onPress}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <FlatListItemSeparator />}
      />
=======
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import ListItem from '../ListItem/ListItem';
import SectionHeading from '../SectionHeading/SectionHeading';

const styles = StyleSheet.create({
  commonStyles: {
    borderColor: '#E5E5E5',
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
      <KeyboardAvoidingView>
        <SectionHeading text={heading} />
        <FlatList
          style={[styles.container, styles.commonStyles]}
          data={data}
          onPress={onPress}
          renderItem={({item}) => (
            <ListItem
              categoryName={isEnglishLanguage ? item.name.en : item.name.mg}
              onPress={onPress}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <FlatListItemSeparator />}
        />
      </KeyboardAvoidingView>
>>>>>>> list-item
    </SafeAreaView>
  );
}
