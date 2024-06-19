import * as react from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import fontScaling from './utils/fontScaling';
import {hp, wp} from './utils/screenSizes';

// Screens
import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Settings';

// Screen names
const homeName = 'Home';
const profileName = 'Profile';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === profileName) {
              iconName = focused ? 'account' : 'account-outline';
            } else if (rn === settingsName) {
              iconName = focused ? 'cog' : 'cog-outline';
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
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
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={profileName} component={Profile} />
        <Tab.Screen name={settingsName} component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
