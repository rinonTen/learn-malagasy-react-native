import {SectionList} from 'react-native';
import {View, SafeAreaView, FlatList} from 'react-native';
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
}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SectionHeading text={heading} />
      <FlatList
        style={[styles.defaultStyles, styles.container]}
        data={data}
        renderItem={({item}) => (
          <ListItem
            categoryName={isEnglishLanguage ? item.name.en : item.name.mg}
            onPress={onPress}
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <FlatListItemSeparator />}
      />
    </SafeAreaView>
  );
}
