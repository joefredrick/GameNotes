import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import BottomTabNavigation from "./BottomTabNavigation";
import Home from "../Pages/Home";
import FreeGamePage from "../Pages/FreeGamePage";
import EpicFreeGamePage from "../Pages/EpicFreeGamePage";
import GameInfoPage from "../Pages/GameInfoPage";
import App from "../../App";


const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='TabScreen' screenOptions={{
        animation: 'slide_from_right',
        headerStyle: { backgroundColor: '#5EA2E5' },
        headerTitleStyle: { color: 'white' },
      }}>
        <Stack.Screen name="TabScreen" component={BottomTabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="FreeGame" component={FreeGamePage} />
        <Stack.Screen name="EpicGame" component={EpicFreeGamePage} />
        <Stack.Screen name="App" component={App} options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen name="GameInfo" component={GameInfoPage} options={{
          headerStyle: { backgroundColor: '#f4f4f9' },
          headerTitleStyle: { color: 'black' },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;