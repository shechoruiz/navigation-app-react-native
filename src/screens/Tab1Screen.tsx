import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles, colors} from '../themes/apptheme';

const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.text}>Íconos</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colors.primary} />
        <Icon name="attach-outline" size={80} color={colors.primary} />
        <Icon name="bonfire-outline" size={80} color={colors.primary} />
        <Icon name="calculator-outline" size={80} color={colors.primary} />
        <Icon name="images-outline" size={80} color={colors.primary} />
        <Icon
          name="chatbubble-ellipses-outline"
          size={80}
          color={colors.primary}
        />
        <Icon name="leaf-outline" size={80} color={colors.primary} />
      </Text>
    </View>
  );
};

export default Tab1Screen;
