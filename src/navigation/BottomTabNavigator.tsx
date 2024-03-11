import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import SettingsScreen from '../screen/SettingsScreen';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{ headerStyle: { backgroundColor: 'red' }, headerShown: false }}>
      <Tab.Screen name="HomeNav" component={HomeNavigator} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;
