import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../themes/apptheme';

const Pagina2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      headerBackTitle: '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
