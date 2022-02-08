import { createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { React } from 'react-native';
import LoginScreen from './src/PermissionandLogin';
import MainScreen from './src/Main';
import MyPageScreen from './src/MyPage';
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen}/>
        <Stack.Screen options={{headerShown: false}} name="Main" component={MainScreen}/>
        <Stack.Screen options={{headerShown: false}} name="MyPage" component={MyPageScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}