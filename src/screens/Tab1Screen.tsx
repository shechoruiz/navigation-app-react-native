import React from 'react';
import {Text, View} from 'react-native';
import TouchableIcon from '../components/TouchableIcon';
import {styles} from '../themes/apptheme';

const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.text}>Íconos</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="attach-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="images-outline" />
        <TouchableIcon iconName="chatbubble-ellipses-outline" />
        <TouchableIcon iconName="leaf-outline" />
      </Text>
    </View>
  );
};

export default Tab1Screen;
