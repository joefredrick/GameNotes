import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginStackParamList } from "../types";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import BottomTabNavigation from "./BottomTabNavigation";

const Stack = createNativeStackNavigator<LoginStackParamList>();

const LoginNavigation = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{
        animation: 'slide_from_right',
        headerStyle: { backgroundColor: '#5EA2E5' },
        headerTitleStyle: { color: 'white' },
      }}>
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignUpPage} options={{ headerShown: false }} />
        <Stack.Screen name="TabScreen" component={BottomTabNavigation} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoginNavigation;