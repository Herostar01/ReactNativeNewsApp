import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/Settings';



export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>

    
      
    <Tab.Navigator>
      <Tab.Screen name="Home" 
        component={HomeScreen} 
        options = {{headerShown: false}} />
      <Tab.Screen name="Settings" 
        component={SettingsScreen} 
        options = {{headerShown: false}}    />
    </Tab.Navigator>
      <StatusBar style="auto" />
    

    </NavigationContainer>
  );
}


