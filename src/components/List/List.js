import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView, View} from 'react-native';
import ListItem from '../ListItem/ListItem';
import SectionHeading from '../SectionHeading/SectionHeading';
import GlobalStyles from '../../constants/GlobalStyles';

export default function ListItemComponent({heading, children}) {
  return (
    <SafeAreaView>
      <SectionHeading text={heading} />
      <View style={{backgroundColor: '#ffffff'}}>
        <View style={[GlobalStyles.listContainer, GlobalStyles.listBorder]}>
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
}
