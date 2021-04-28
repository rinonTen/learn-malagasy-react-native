import * as React from 'react';
import {StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import ArrowLeftIcon from '../../assets/icons/arrowLeft.svg';
import DoubleTickedIcon from '../../assets/icons/doubleTicked.svg';
import PlusIcon from '../../assets/icons/plusIcon.svg';
import SettingIcon from '../../assets/icons/settingIcon.svg';
import TickedIcon from '../../assets/icons/tickedIcon.svg';

const styles = StyleSheet.create({
  button: {
    maxWidth: 40,
    height: 40,
    paddingTop: 8,
    borderColor: '#06B6D4',
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: '#06B6D4',
    alignItems: 'center',
  },

  icon: {
    marginTop: 3,
  },
});

export default function ToolButton({icon, onPress = () => null}) {
  let buttonIcon;
  if (icon === 'plusIcon') {
    buttonIcon = <PlusIcon style={styles.icon} />;
  } else if (icon === 'arrowLeftIcon') {
    buttonIcon = <ArrowLeftIcon style={{marginTop: 4}} />;
  } else if (icon === 'doubleTickedIcon') {
    buttonIcon = <DoubleTickedIcon style={styles.icon} />;
  } else if (icon === 'tickedIcon') {
    buttonIcon = <TickedIcon style={styles.icon} />;
  } else if (icon === 'settingIcon') {
    buttonIcon = <SettingIcon />;
  }

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {buttonIcon}
      </TouchableOpacity>
    </SafeAreaView>
  );
}
