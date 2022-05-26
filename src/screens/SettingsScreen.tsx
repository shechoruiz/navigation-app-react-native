import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, styles} from '../themes/apptheme';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginBottom: insets.top + 20,
      }}>
      <Text>SettingsScreen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={150} color={colors.primary} />
      )}
    </View>
  );
};

export default SettingsScreen;
