import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/Login';
import MyTabs from './BottomTabNavigator';
import AxiosListScreen from '../screen/AxiosListScreen';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="AxiosScreen" component={AxiosListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
