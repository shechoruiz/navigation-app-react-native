import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../themes/apptheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.text}>Pagina1 Screen</Text>
      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      {/* <Button
        title="Ir a persona"
        onPress={() => navigation.navigate('PersonaScreen')}
      /> */}
      <Text>Navegar con argumentos</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: 'green'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, nombre: 'Sergio'})
          }>
          <Text style={styles.botonGrandeTexto}>Sergio!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonGrande}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 2, nombre: 'Maria'})
          }>
          <Text style={styles.botonGrandeTexto}>Maria!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagina1Screen;
