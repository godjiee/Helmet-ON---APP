import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import fontScaling from './utils/fontScaling';
import {hp, wp} from './utils/screenSizes';

// Screens
import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Details from './screens/Details';

// Screen names
const home = 'Home';
const profile = 'Profile';
const settings = 'Settings';
const details = 'Details';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={home}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let icon;
          let rn = route.name;

          if (rn === home) {
            icon = focused ? 'home' : 'home-outline';
          } else if (rn === profile) {
            icon = focused ? 'account' : 'account-outline';
          } else if (rn === settings) {
            icon = focused ? 'cog' : 'cog-outline';
          }

          return (
            <MaterialCommunityIcons
              name={icon}
              size={hp('4.5%')}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: '#333',
        tabBarInactiveTintColor: '#999',
        tabBarShowLabel: false,
        tabBarStyle: {
          height: hp('7%'),
        },
        headerShown: false,
      })}>
      <Tab.Screen name={home} component={Home} />
      <Tab.Screen name={profile} component={Profile} />
      <Tab.Screen name={settings} component={Settings} />
    </Tab.Navigator>
  );
}

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
