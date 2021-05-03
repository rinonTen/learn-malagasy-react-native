import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView, View} from 'react-native';
import ListItem from '../ListItem/ListItem';
import SectionHeading from '../SectionHeading/SectionHeading';
import GlobalStyles from '../../constants/GlobalStyles';
import {useContext} from '../../context/globalContext';

const FlatListItemSeparator = () => {
  return <View style={GlobalStyles.listBorder} />;
};

export default function ListItemComponent({
  navigation,
  onPress = () => {},
  data,
  isEnglishLanguage,
  heading,
}) {
  const {setCategoryToDisplayId} = useContext();

  return (
    <SafeAreaView>
      <SectionHeading text={heading} />
      <View style={{backgroundColor: '#ffffff'}}>
        <View style={[GlobalStyles.listContainer, GlobalStyles.listBorder]}>
          {data &&
            data.map(item => {
              return (
                <React.Fragment key={item?.id}>
                  <TouchableOpacity
                    onPress={() => {
                      setCategoryToDisplayId(item?.id);
                      onPress(navigation);
                    }}>
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
