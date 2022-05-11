import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../themes/apptheme';

interface Props extends StackScreenProps<any, any> {}

const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.text}>Pagina3 Screen</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir al home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Pagina3Screen;
