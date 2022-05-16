import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../themes/apptheme';

const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginBottom: insets.top + 20,
      }}>
      <Text>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;
