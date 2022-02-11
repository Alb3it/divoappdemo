import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { React } from "react-native";
import LoginScreen from "./src/PermissionandLogin";
import MainScreen from "./src/Main";
import MyPageScreen from "./src/MyPage";
import EditProfileScreen from "./src/EditProfile";
import { useFonts } from 'expo-font';

import { SafeAreaProvider } from "react-native-safe-area-context";

const StackMyPage = createNativeStackNavigator();
const TabRoot = createBottomTabNavigator();
const TabMain = createBottomTabNavigator();

function MainNavigator() {
  return (
    <TabMain.Navigator screenOptions={{ headerShown: false, tabBarStyle:{display:'none'}}} initialRouteName="Main">
      
      <TabMain.Screen name="MyPageNavigator" component={MyPageNavigator} />
    </TabMain.Navigator>
  );
}

function MyPageNavigator() {
  return (
    <StackMyPage.Navigator screenOptions={{ headerShown: false, tabBarStyle:{display:'none'}}} initialRouteName="MyPage">
      <StackMyPage.Screen name="MyPage" component={MyPageScreen} />
      <StackMyPage.Screen name="EditProfile" component={EditProfileScreen} />
    </StackMyPage.Navigator>
  );
}

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Bold.ttf'),
  });
  if(!loaded) return null;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabRoot.Navigator screenOptions={{ headerShown: false, tabBarStyle:{display:'none'}}}>
        <TabMain.Screen name="Main" component={MainScreen} />
        <TabRoot.Screen name="check" component={LoginScreen} />
          <TabRoot.Screen name="MainNavigator" component={MainNavigator} />
          <TabRoot.Screen name="Login" component={LoginScreen} />
        </TabRoot.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
