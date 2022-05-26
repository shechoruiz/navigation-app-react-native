import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../themes/apptheme';

const AlbumsScreen = () => {
  const {authState, signOut} = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.text}>Albums Screen</Text>
      {authState.isLoggedIn && (
        <Button title="Cerrar sesión" onPress={signOut} />
      )}
    </View>
  );
};

export default AlbumsScreen;
