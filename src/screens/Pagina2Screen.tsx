import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../themes/apptheme';

const Pagina2Screen = () => {
  const navigator = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.text}>Pagina2 Screen</Text>
      <Button
        title="Ir a página 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};

export default Pagina2Screen;
