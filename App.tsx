import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, Text, View} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <View>
          <Text>App Screen</Text>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
