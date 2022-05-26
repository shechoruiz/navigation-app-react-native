import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../themes/apptheme';

const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.text}>Contacts Screen</Text>
      {!authState.isLoggedIn && (
        <Button title="Iniciar sesión" onPress={signIn} />
      )}
    </View>
  );
};

export default ContactsScreen;
