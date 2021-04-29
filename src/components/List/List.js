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
        <View style={[styles.container, styles.commonStyles]}>
          {data &&
            data.map(item => {
              return (
                <React.Fragment>
                  <TouchableOpacity onPress={onPress} key={item.id}>
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
