import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatsScreen from '../screens/ChatsScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../themes/apptheme';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  // const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={
        {
          // paddingTop: top,
        }
      }
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          // borderTopColor: colors.primary,
          // borderTopWidth: 2,
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarIcon: props => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chats':
              iconName = 'Ch';
              break;
            case 'Contacts':
              iconName = 'Co';
              break;
            case 'Albums':
              iconName = 'Al';
              break;
          }
          return <Text style={{color: props.color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
