import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, } from '@react-navigation/native';

import All from './screens/All';
import Business from './screens/Business';
import HealthScreen from './screens/Health';
import TechScreen from './screens/Tech';
import SportsScreen from './screens/Sports';

import { Icon } from 'react-native-elements'


export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>

    
      
    <Tab.Navigator screenOptions={{
  "tabBarActiveTintColor": "red",
  "tabBarShowLabel": false,
  "tabBarStyle": [
    {
      "display": "flex"
    },
    null
  ]
}} >

      <Tab.Screen name="Home" 
        component={All} 
        options = {{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon
            
            type='feather'
            name='home'
            color={color}
            />
          ),
          }} />
      <Tab.Screen name="Business" 
        component={Business} 
        options = {{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon
            
            type='feather'
            name='dollar-sign'
            color={color}
            />
          ),
          }}    />
      <Tab.Screen name="Health" 
        component={HealthScreen} 
        options = {{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon
            
            type='feather'
            name='heart'
            color={color}
            />
          ),
          }}    />
      <Tab.Screen name="Sports" 
        component={SportsScreen} 
        options = {{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon
            
            type='ionicon'
            name='football-outline'
            color={color}
            />
          ),
          }}    />
      <Tab.Screen name="Tech" 
        component={TechScreen} 
        options = {{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon
            
            type='ionicon'
            name='watch-outline'
            color={color}
            />
          ),
          }}    />

    </Tab.Navigator>
      <StatusBar style="auto" />
    

    </NavigationContainer>
  );
}


